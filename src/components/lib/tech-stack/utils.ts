import {Draggable} from 'animejs';
import {RefObject} from 'react';
import {StackKey} from '@/components/lib/tech-stack/index';

export const calcDistance = (x: number, y: number) => {
  return Math.sqrt(x ** 2 + y ** 2);
};


export const safeIndex = (next: number, stackKeys: string[]) => {
  if (next < 0) return stackKeys.length - 1;
  if (next >= stackKeys.length) return 0;
  return next;
};


export const calcFrames = (active: number, stackKeys: string[]) => {
  return stackKeys.map((key, index) => {
    let delta = index - active;
    const total = stackKeys.length;

    if (delta > total / 2) delta -= total;
    if (delta < -total / 2) delta += total;

    const distance = Math.abs(delta);
    return {
      key: key as StackKey,
      distance,
      offset: active === index ? 0 : delta * 30,
      z: total - distance,
      scale: -distance * 20,
      i: index,
    };
  });
};

export const calcNext = (draggable: Draggable, activeRef: RefObject<number>, threshold: number, stackKeys: string[]) => {
  const distance = calcDistance(draggable.x, draggable.y);
  const sum = draggable.x + draggable.y;

  if (distance > threshold) {
    return safeIndex(sum < 0 ? activeRef.current + 1 : activeRef.current - 1, stackKeys);
  }

  return activeRef.current;
};