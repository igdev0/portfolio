import {createContext, PropsWithChildren, useState} from 'react';
import {profile} from '@/content/profile';

export interface TechStackContext {
  active: number;
  data: typeof profile.stack.tech;
  keys: (keyof typeof profile.stack.tech)[];

  setActive(active: number): void;
}

export const TechStackContext = createContext<TechStackContext>({
  active: 0,
  setActive: () => {
  },
  data: profile.stack.tech,
  keys: []
});


export function TechStackProvider(props: PropsWithChildren & Record<"data", typeof profile.stack.tech>) {
  const [active, setActive] = useState(0);


  return (
      <TechStackContext.Provider value={{
        active,
        setActive,
        data: profile.stack.tech,
        keys: Object.keys(profile.stack.tech) as TechStackContext['keys']
      }}>
        {props.children}
      </TechStackContext.Provider>
  );
}