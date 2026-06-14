import {createContext, Dispatch, RefObject, SetStateAction} from 'react';
import {MotionValue} from 'motion';

export interface CardFrame {
  mx: number;
  my: number;
  lx: number;
  ly: number;
  scaleZ: number;
}

export interface StackContextProps {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
  frames: RefObject<CardFrame[]>;
  draw: MotionValue<string>;
  tempPath: MotionValue<string>;
  calcTempPath: (x?: number, y?: number, z?: number) => string;
  triggers: RefObject<HTMLButtonElement[]>;
  cards: RefObject<HTMLDivElement[]>;
  calculateDraw(x?: number, y?: number, z?: number): string;
}

export const StackContext = createContext<StackContextProps>({
  active: 0,
  frames: {current: []},
  triggers: {current: []},
  cards: {current: []},
  draw: new MotionValue(''),
  calculateDraw() {
    return '';
  },
  calcTempPath() {
    return '';
  },
  tempPath: new MotionValue(''),
  setActive() {
  },
});