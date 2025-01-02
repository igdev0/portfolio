"use client";
import React, {PropsWithChildren, useCallback, useState} from 'react';

export interface AppContextType {
  menuOpen: boolean,
  toggleMenu: (value?:boolean) => void,
}

export const AppContext = React.createContext<AppContextType>({menuOpen: false, toggleMenu: () => {}});


export default function AppContextProvider(props:PropsWithChildren) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = useCallback((value?: boolean) => {
    setMenuOpen(v => value !== undefined ? value : !v);
  }, [ setMenuOpen])

  return (
      <AppContext.Provider value={{menuOpen, toggleMenu}}>
        {props.children}
      </AppContext.Provider>
  )
}