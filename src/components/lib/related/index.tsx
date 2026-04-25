import {ElementType, PropsWithChildren, useImperativeHandle, useLayoutEffect, useRef} from 'react';
import {RelatedNodePort, useRelatedStore} from '@/components/lib/related/store';

interface RelatedProps extends PropsWithChildren {
  id: string;
  ports: Set<RelatedNodePort>;
  z: number;
  as: ElementType;
  className?: string;
}

export default function Related(props: RelatedProps) {
  const store = useRelatedStore();
  const ref = useRef<HTMLDivElement>(null);
  const {ports, z, as: Component, id, className, children} = props;
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

  useImperativeHandle(ref, () => {
    return {
      ...ref.current,
    }
  }, [])


  return (
      <Component className={className} ref={ref}>
        {children}
      </Component>
  );
}