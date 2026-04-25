import {PropsWithChildren, useEffect, useLayoutEffect, useRef} from 'react';
import {RelatedNodePort, useRelatedStore} from '@/components/lib/related/store';

interface RelatedProps extends PropsWithChildren {
  id: string;
  ports: Set<RelatedNodePort>;
  z: number;
  asChild: boolean;
  className?: string;
}

export default function Related(props: RelatedProps) {
  const store = useRelatedStore();
  const ref = useRef<HTMLDivElement>(null);
  const {ports, z, asChild, id, className, children} = props;

  useLayoutEffect(() => {
    if (ref.current) {
      const {x, y, width, height} = ref.current.getBoundingClientRect();
      store.addNode({
        x,
        y,
        width,
        height,
        id,
        ports: ports,
        z: z
      });
    }
  }, []);

  useEffect(() => {
    console.log({store});
  }, [store])

  return (
      <div className={className} ref={ref}>
        {children}
      </div>
  );
}