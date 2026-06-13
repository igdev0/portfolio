"use client";
import {PropsWithChildren, useContext, useLayoutEffect} from 'react';
import {StackContext} from '@/components/stack/context';
import {motion, useMotionValueEvent, useSpring} from 'framer-motion';
import {MotionNodeDragHandlers} from 'motion';
import clsx from 'clsx';

export interface StackCardProps extends PropsWithChildren {
  id: number;
  className?: string;
  max: number;
}

export default function StackCard(props: StackCardProps) {
  const {setActive, draw, calculateDraw, frames, cards, active} = useContext(StackContext);
  const {children} = props;
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const i = props.id;
  const total = props.max;
  let delta = i - active;
  if (delta > total / 2) delta -= total;
  if (delta < -total / 2) delta += total;

  const distance = Math.abs(delta);
  const offset = delta * 30;
  const _x = 0;
  const _y = offset;
  const _z = -distance * 15;

  const x = useSpring(_x, {duration: 600});
  const y = useSpring(_y, {duration: 600});
  const z = useSpring(_z, {duration: 600});

  useLayoutEffect(() => {
    x.set(_x);
    y.set(_y);
    z.set(_z);
    !isMobile && draw.set(calculateDraw(_x, _y, Math.abs(_z)));
  }, [active]);

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

  const onDragEnd: MotionNodeDragHandlers['onDragEnd'] = (_, info) => {
    x.stop();
    y.stop();
    z.stop();

    if (cards.current[props.id]) {
      const {width, height} = cards.current[props.id]?.getBoundingClientRect();
      if (info.offset.y > 0 && info.offset.y > (height / 2) || info.offset.x > 0 && info.offset.x > (width / 2)) {
        setActive(props.id !== active ? props.id : safeIndex(active, true));
      } else if (info.offset.y < 0 && info.offset.y < -(height / 2) || info.offset.x < 0 && info.offset.x < -(width / 2)) {
        setActive(props.id !== active ? props.id : safeIndex(active, false));
      }

      x.set(_x);
      y.set(_y);
      z.set(_z);
    }
  };

  const updateDraw = () => {
    if (props.id === active && !isMobile) {
      draw.jump(calculateDraw(x.get(), y.get(), Math.abs(z.get())));
    }
  };

  useMotionValueEvent(x, "change", updateDraw);
  useMotionValueEvent(y, "change", updateDraw);
  useMotionValueEvent(z, "change", updateDraw);


  return (
      <motion.div
          drag={isMobile ? 'x' : true}
          whileTap={{cursor: "grabbing", scaleZ: 0}}
          ref={(r) => {
            cards.current[props.id] = r as HTMLDivElement;
          }}
          onDrag={(_, info) => {
            const nextX = info.offset.x + _x;
            const nextY = info.offset.y + _y;
            x.jump(nextX);
            y.jump(nextY);

          }}

          style={{x, y, z, cursor: "grab"}}
          onDragEnd={onDragEnd}
          className={clsx(props.className, active === props.id && 'active')}>
        {children}
      </motion.div>
  );
}