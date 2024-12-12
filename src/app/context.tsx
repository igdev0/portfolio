"use client";
import React, {PropsWithChildren, useCallback, useState} from 'react';

export interface AppContextType {
  menuOpen: boolean,
  toggleMenu: () => void,
}

export const AppContext = React.createContext<AppContextType>({menuOpen: false, toggleMenu: () => {}});


export default function AppContextProvider(props:PropsWithChildren) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen(v => !v);
  }, [ setMenuOpen])

  return (
      <AppContext.Provider value={{menuOpen, toggleMenu}}>
        {props.children}
      </AppContext.Provider>
  )
}