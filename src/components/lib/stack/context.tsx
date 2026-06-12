import {createContext, Dispatch, SetStateAction} from 'react';

export interface CardFrame {
  x: number,
  y: number,
  scaleZ: number,
}

export interface StackContextProps {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
  frames: CardFrame[];
  setFrames: Dispatch<SetStateAction<CardFrame[]>>;
}

export const StackContext = createContext<StackContextProps>({
  active: 0,
  frames: [],
  setFrames() {},
  setActive() {},
});