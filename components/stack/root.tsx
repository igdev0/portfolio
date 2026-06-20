"use client";
import {CardFrame, StackContext} from '@/components/stack/context';
import {PropsWithChildren, useLayoutEffect, useRef, useState} from 'react';
import {useMotionValue} from 'motion/react';

export default function StackRoot(props: PropsWithChildren) {
  const [active, setActive] = useState(0);
  const frames = useRef<CardFrame[]>([]);
  const triggers = useRef<HTMLButtonElement[]>([]);
  const cards = useRef<HTMLDivElement[]>([]);
  const draw = useMotionValue('');
  const {children} = props;

  const calculateDraw = (x = 0, y = 0, z = 0) => {
    const card = cards.current[active];
    const controller = triggers.current[active];

    const border = 6;
    const cardParent = card.offsetParent as HTMLElement | null;
    const mx = controller.offsetLeft + controller.clientWidth + border;
    const my = controller.offsetTop + controller.clientHeight / 2;

    const baseLx =
        (cardParent?.offsetLeft ?? 0) +
        card.offsetLeft + z;

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
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [active]);

  return (
      <div className="stack">
        <StackContext.Provider
            value={{
              frames,
              draw,
              active,
              setActive,
              triggers,
              cards,
              calculateDraw,
            }}>
          {children}
        </StackContext.Provider>
      </div>
  );
}