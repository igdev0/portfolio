import {createContext, Dispatch, RefObject, SetStateAction} from 'react';
import {MotionValue} from 'motion';

export interface CardFrame {
  x: number,
  y: number,
  scaleZ: number,
}

export interface StackContextProps {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
  frames: CardFrame[];
  draw: MotionValue<string>;
  triggers: RefObject<HTMLButtonElement[]>;
  cards: RefObject<HTMLDivElement[]>;
  setFrames: Dispatch<SetStateAction<CardFrame[]>>;

  calculateDraw(x: number, y: number): string;
}

export const StackContext = createContext<StackContextProps>({
  active: 0,
  frames: [],
  triggers: {current: []},
  cards: {current: []},
  draw: new MotionValue(''),
  calculateDraw() {return ''},
  setFrames() {},
  setActive() {},
});