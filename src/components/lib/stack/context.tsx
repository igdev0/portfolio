import {createContext, Dispatch, SetStateAction} from 'react';

export type StackActiveId = string | null;

export interface StackContextProps {
  activeId: StackActiveId;
  setActiveId: Dispatch<SetStateAction<StackActiveId>>;
  totalCards: number;
  setTotalCards: Dispatch<SetStateAction<number>>;
}

export const StackContext = createContext<StackContextProps>({
  activeId: '',
  totalCards: 0,
  setActiveId() {
  },
  setTotalCards() {
  },
});