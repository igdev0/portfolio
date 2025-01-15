import {createContext, PropsWithChildren, useState} from 'react';
import styles from './accordion.module.scss';

export type AccordionContextType = {
  activeIndex: number | null,
  setActiveIndex: (index: number | null) => void,
}

const DEFAULT_VALUES: AccordionContextType = {
  activeIndex: 0,
  setActiveIndex() {}
}

export const AccordionContext = createContext<AccordionContextType>(JSON.parse(JSON.stringify(DEFAULT_VALUES)));


export default function Accordion(props: PropsWithChildren) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
      <AccordionContext.Provider value={{activeIndex, setActiveIndex}}>
        <div className={styles.accordion}>
          {props.children}
        </div>
      </AccordionContext.Provider>
  )
}

