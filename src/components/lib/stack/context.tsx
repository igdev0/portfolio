import {createContext, Dispatch, SetStateAction} from 'react';

export type StackActiveId = string | null;

export interface StackContextProps {
  activeId: StackActiveId;
  setActiveId: Dispatch<SetStateAction<StackActiveId>>;
  active: number;
  cards: string[];
  setCards: Dispatch<SetStateAction<string[]>>;
}

export const StackContext = createContext<StackContextProps>({
  activeId: null,
  active: 0,
  cards: [],
  setActiveId() {
  },
  setCards() {
  },
});