import {PropsWithChildren, useEffect, useLayoutEffect, useRef} from 'react';
import {RelatedNodePort, useRelatedStore} from '@/components/lib/related/store';
import clsx from 'clsx';
import useResizeObserver from '@/hooks/use-resize-observer';

export function RelatedOverlay(props: { className?: string }) {
  const container = useRelatedStore().container;
  const nodes = useRelatedStore().nodes;
  return (
      <svg
          className={clsx(`z-20 w-full h-full border-2 border-pink-300 ${props.className ?? ""}`)}
          xmlns="http://www.w3.org/2000/svg">
        {
          Array.from(nodes).map((node) => (
              <g transform={`translate(${node.x + window.scrollX}, ${node.y + window.scrollY})`}
                 key={`node-${node.id}`}>
                {
                  node.ports.map((port) => (
                      <path key={`port-${port.id}`} className="stroke-(--fg-default)" d={port.path}
                            strokeWidth={2}/>
                  ))
                }
              </g>
          ))
        }
      </svg>
  );
}

interface RelatableProps extends PropsWithChildren {
  id: string;
  to?: string;
  asChild?: boolean;
  className?: string;
}

export function RelatedContainer(props: PropsWithChildren) {
  const updateContainer = useRelatedStore().updateContainer;
  const ref = useRef<HTMLDivElement>(null);
  const [addRef] = useResizeObserver();

  const onResize = (entry: ResizeObserverEntry) => {
    const rect = entry.target.getBoundingClientRect();
    updateContainer({
      top: rect.top,
      left: rect.left,
      bottom: rect.bottom,
      width: rect.width,
      height: rect.height,
    });
  };

  useLayoutEffect(() => {
    if (ref.current) {
      addRef(onResize)(ref.current);
    }
  }, []);

  return (
      <div className="w-full h-full grid" ref={ref}>
        {props.children}
      </div>
  );
}

export function Relatable(props: RelatableProps) {
  const store = useRelatedStore();
  const ref = useRef<HTMLDivElement>(null);
  const {id, className, children} = props;

  const ports = useRef<RelatedNodePort[]>([]);

  const calcOffsets = () => {

    if (!ref.current) {
      throw new Error("Attempting to get offsets before layout");
    }
    const {width, x, y, top, left, height} = ref.current.getBoundingClientRect();
    return {x, y, width, top, left, height};
  };

  const setup = () => {
    if (ref.current) {

      const {width, height, y, x} = calcOffsets();
      store.add({
        id,
        x,
        y,
        width,
        height,
        ports: ports.current,
      });
    }

  };

  const link = () => {
    const current = store.getNode(props.id);
    const node = store.getNode(props.to);
    if (current && node) {
      current.ports = [
        {
          id: `${props.id}-${props.to}`,
          path: `M ${current.width} ${current.height / 2} L ${node.x - current.x} ${node.y - current.y + node.height / 2}`,
        }
      ];
    }
  };

  useEffect(() => {
    const calc = () => {
      setup();
      link();
    };
    const anim = window.requestAnimationFrame(calc);
    return () => {
      window.cancelAnimationFrame(anim);
    };
  }, [store.container]);

  useLayoutEffect(() => {
    setup();
  }, []);

  return (
      <div className={className} ref={ref}>
        {children}
      </div>
  );
}