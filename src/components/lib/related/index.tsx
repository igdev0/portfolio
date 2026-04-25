import {PropsWithChildren, useLayoutEffect, useRef} from 'react';
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
              <g key={`node-${node.id}`}>
                {
                  [...node.ports.entries()].map(([port]) => (
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
  const ports = useRef(new Set<RelatedNodePort>([]));
  const z = 1;

  useLayoutEffect(() => {
    if (ref.current) {
      const {x, y, width, top, left, height} = ref.current.getBoundingClientRect();
      const container = ref.current.offsetParent?.getBoundingClientRect();
      if (!container) {
        throw new Error("Offset parent is required");
      }
      const relX = left - container.left;
      const relY = top - container.top;

      ports.current.add({
        id,
        height,
        z,
        path: `M ${relX - 2} ${relY + height / 2} h ${width}`,
        width,
        x,
        y
      });

      store.add({
        id,
        x,
        y,
        z,
        width,
        height,
        ports: ports.current,
      });
    }

    return () => {};
  }, []);

  return (
      <div className={className} ref={ref}>
        {children}
      </div>
  );
}