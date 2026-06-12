"use client";
import {PropsWithChildren, useContext, useLayoutEffect} from 'react';
import {StackContext} from '@/components/lib/stack/context';
import {motion} from 'framer-motion';
import {MotionNodeDragHandlers} from 'motion';

export interface StackCardProps extends PropsWithChildren {
  id: number;
  className?: string;
}

export default function StackCard(props: StackCardProps) {
  const {setActive, frames, active} = useContext(StackContext);
  const {children} = props;

  useLayoutEffect(() => {
    setActive(id => id ? id : props.id);
  }, []);

  const onDrag: MotionNodeDragHandlers['onDrag'] = (event: PointerEvent) => {
    console.log(event);
  };

  /**
   * We want to
   */

  const i = props.id;
  const total = frames.length;

  let delta = i - active;

  if (delta > total / 2) delta -= total;
  if (delta < -total / 2) delta += total;

  const distance = Math.abs(delta);
  const offset = delta * 30;

  const z = -distance * 15;
  const y = offset;

  return (
      <motion.div drag
                  dragSnapToOrigin
                  dragDirectionLock
                  initial={{z, y}}
                  animate={{y, z}}
                  onDrag={onDrag}

                  className={props.className}>
        {children}
      </motion.div>
  );
}