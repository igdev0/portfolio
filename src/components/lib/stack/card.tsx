import {PropsWithChildren, useContext, useLayoutEffect} from 'react';
import {StackContext} from '@/components/lib/stack/context';
import {motion, useDragControls} from 'framer-motion';
import {MotionNodeDragHandlers} from 'motion';

export interface StackCardProps extends PropsWithChildren {
  id: number;
  className?: string;
}

export default function StackCard(props: StackCardProps) {
  const {children} = props;
  const controls = useDragControls();
  const {setActive, frames, active} = useContext(StackContext);

  useLayoutEffect(() => {
    setActive(id => id ? id : props.id);
  }, []);

  const onDrag: MotionNodeDragHandlers['onDrag'] = (props: PointerEvent) => {

  };

  if (!frames[props.id] || active !== props.id) {
    return null;
  }

  return (
      <motion.div drag
                  dragSnapToOrigin
                  dragDirectionLock
                  dragControls={controls}
                  onDrag={onDrag}
                  className={props.className}>
        {children}
      </motion.div>
  );
}