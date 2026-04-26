import {PropsWithChildren, useCallback, useEffect, useLayoutEffect, useRef} from 'react';
import {RelatedNodePort, useRelatedStore} from '@/components/lib/related/store';
import clsx from 'clsx';

export function RelatedOverlay(props: { className?: string }) {
  const store = useRelatedStore();

  return (
      <svg
          className={clsx(`z-20 w-full h-full border-2 border-pink-300 ${props.className ?? ""}`)}
          xmlns="http://www.w3.org/2000/svg">
        {
          Array.from(store.nodes).map((node) => (
              <g transform={`translate(${node.absX}, ${node.absY})`} key={`node-${node.id}`}>
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

export function Relatable(props: RelatableProps) {
  const store = useRelatedStore();
  const ref = useRef<HTMLDivElement>(null);
  const {id, className, children} = props;
  const ports = useRef<RelatedNodePort[]>([]);
  const z = 1;

  const getOffsets = () => {

    if (!ref.current) {
      throw new Error("Attempting to get offsets before layout");
    }
    const {width, top, x, y, left, height} = ref.current.getBoundingClientRect();
    const container = ref.current.offsetParent?.getBoundingClientRect();
    if (!container) {
      throw new Error("Offset parent is required");
    }
    const absX = left - container.left;
    const absY = top - container.top;
    return {x, y, absX, absY, width, height};
  };

  const setup = () => {

    if (ref.current) {
      const {width, absY, absX, height, y, x} = getOffsets();

      store.add({
        id,
        absY,
        absX,
        x,
        y,
        z,
        width,
        height,
        ports: ports.current,
      });
    }
  };

  const link = useCallback(() => {
    if (props.to) {
      const current = store.getNode(props.id);
      const node = store.getNode(props.to);
      if (current && node) {

        current.ports = [
          {
            id: `${props.id}-${props.to}`,
            path: `M ${node.width - 2} ${node.height / 2} h ${node.x - current.x - node.width}`,
          }
        ];

      }
    }
  }, [store]);

  const update = () => {
    const offsets = getOffsets();
    store.updateCoords(props.id, offsets);
  };

  useEffect(() => {
    link();
  }, [store]);

  useLayoutEffect(() => {
    setup();
  }, []);

  return (
      <div className={className} ref={ref}>
        {children}
      </div>
  );
}