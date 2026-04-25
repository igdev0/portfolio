import {Fragment, PropsWithChildren, useLayoutEffect, useRef} from 'react';
import {RelatedNodePort, useRelatedStore} from '@/components/lib/related/store';

interface RelatedProps extends PropsWithChildren {
  id: string;
  ports?: Set<RelatedNodePort>;
  z: number;
  asChild?: boolean;
  className?: string;
}

export function RelatedOverlay() {
  const store = useRelatedStore();
  return (
      <svg
          className="fixed w-full h-full border-2 border-pink-300 z-100 top-0 left-0 right-0 bottom-0"
          xmlns="http://www.w3.org/2000/svg">
        {
          Array.from(store.nodes).map((node) => (
              <Fragment key={`node-${node.id}`}>
                {
                  [...node.ports.entries()].map(([port]) => (
                      <path key={`port-${port.id}`} className="stroke-(--fg-default)" d={port.path}
                            strokeWidth={2}/>
                  ))
                }
              </Fragment>
          ))
        }
      </svg>
  );
}


export function RelatedNode(props: RelatedProps) {
  const store = useRelatedStore();
  const ref = useRef<HTMLDivElement>(null);
  const {z, id, className, children} = props;

  const defaultPorts = new Set<RelatedNodePort>([]);

  useLayoutEffect(() => {
    if (ref.current) {
      const {x, y, width, height} = ref.current.getBoundingClientRect();

      defaultPorts.add({
        height,
        z: 1,
        path: `M ${x} ${y} h ${width - 2}`,
        width,
        y, id, x
      });
      store.add({
        x,
        y,
        width,
        height,
        id,
        ports: defaultPorts,
        z: z
      });
    }
  }, []);

  return (
      <div className={className} ref={ref}>
        {children}
      </div>
  );
}