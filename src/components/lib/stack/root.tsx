import {StackActiveId, StackContext} from '@/components/lib/stack/context';
import {PropsWithChildren, useState} from 'react';

export default function StackRoot(props: PropsWithChildren) {
  const [activeId, setActiveId] = useState<StackActiveId>(null);
  const [totalCards, setTotalCards] = useState<number>(0);
  const {children} = props;

  return (
      <StackContext.Provider value={{totalCards, setTotalCards, setActiveId, activeId}}>
        {children}
      </StackContext.Provider>
  );
}