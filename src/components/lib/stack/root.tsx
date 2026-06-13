"use client";
import {CardFrame, StackContext} from '@/components/lib/stack/context';
import {PropsWithChildren, useLayoutEffect, useRef, useState} from 'react';
import {useMotionValue} from 'framer-motion';

export default function StackRoot(props: PropsWithChildren) {
  const [active, setActive] = useState(0);
  const [frames, setFrames] = useState<CardFrame[]>([]);
  const triggers = useRef<HTMLButtonElement[]>([]);
  const cards = useRef<HTMLDivElement[]>([]);
  const draw = useMotionValue('');
  const {children} = props;

  const calculateDraw = (x = 0, y = 0, z = 0) => {
    const card = cards.current[active];
    const controller = triggers.current[active];

    const border = 2;
    const cardParent = card.offsetParent as HTMLElement | null;

    const mx = controller.offsetLeft + controller.clientWidth + border;
    const my = controller.offsetTop + controller.clientHeight / 2;

    const baseLx =
        (cardParent?.offsetLeft ?? 0) +
        card.offsetLeft;

    const baseLy =
        (cardParent?.offsetTop ?? 0) +
        card.offsetTop +
        card.clientHeight / 2;

    const lx = baseLx + x;
    const ly = baseLy + y;

    return `M ${mx} ${my} Q ${(mx + lx) / 2} ${(my + ly) / 2} ${lx} ${ly}`;
  };

  useLayoutEffect(() => {
    draw.jump(calculateDraw());
  }, [active, cards, triggers]);

  useLayoutEffect(() => {
    const resizeHandler = () => {
      draw.set(calculateDraw());
    }
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    }
  }, []);

  return (
      <StackContext.Provider
          value={{frames, draw, setFrames, active, setActive, triggers, cards, calculateDraw}}>
        {children}
      </StackContext.Provider>
  );
}