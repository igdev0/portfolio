"use client";
import {PropsWithChildren, useContext, useLayoutEffect, useRef} from 'react';
import {StackContext} from '@/components/lib/stack/context';
import {motion, useDragControls} from 'framer-motion';
import {MotionNodeDragHandlers} from 'motion';

export interface StackCardProps extends PropsWithChildren {
  id: number;
  className?: string;
}

export default function StackCard(props: StackCardProps) {
  const {setActive, frames, active} = useContext(StackContext);
  const controls = useDragControls();
  const ref = useRef<HTMLDivElement>(null);
  const {children} = props;

  const i = props.id;
  const total = frames.length;

  let delta = i - active;
  if (delta > total / 2) delta -= total;
  if (delta < -total / 2) delta += total;

  const distance = Math.abs(delta);
  const offset = delta * 30;

  const z = -distance * 15;
  const y = offset;
  useLayoutEffect(() => {
    setActive(id => id ? id : props.id);
  }, []);

  const safeIndex = (idx: number, increment: boolean) => {
    if (increment) {
      return idx + 1 > frames.length - 1 ? 0 : idx + 1;
    } else {
      return idx - 1 < 0 ? frames.length - 1 : idx - 1;
    }
  };

  const onDragEnd: MotionNodeDragHandlers['onDragEnd'] = (event: PointerEvent, info) => {
    if (ref.current) {
      const {width, height} = ref.current?.getBoundingClientRect();
      if (info.offset.y > 0 && info.offset.y > (height / 2) || info.offset.x > 0 && info.offset.x > (width / 2)) {
        return setActive(props.id !== active ? props.id : safeIndex(active, true));
      } else if (info.offset.y < 0 && info.offset.y < -(height / 2) || info.offset.x < 0 && info.offset.x < -(width / 2)) {
        return setActive(props.id !== active ? props.id : safeIndex(active, false));
      }
    }
  };


  if (frames.length === 0) {
    return null;
  }

  return (
      <motion.div drag
                  dragSnapToOrigin
                  ref={ref}
                  initial={{y, z}}
                  animate={{y, z}}
                  onDragEnd={onDragEnd}
                  className={props.className}>
        {children}
      </motion.div>
  );
}