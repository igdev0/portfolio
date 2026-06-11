import {StackActiveId, StackContext} from '@/components/lib/stack/context';
import {PropsWithChildren, useMemo, useState} from 'react';

export default function StackRoot(props: PropsWithChildren) {
  const [activeId, setActiveId] = useState<StackActiveId>(null);
  const [cards, setCards] = useState<string[]>([]);

  const active = useMemo(() => {
    return 0;
  }, [activeId]);

  const {children} = props;

  return (
      <StackContext.Provider value={{cards, setCards, setActiveId, activeId, active}}>
        {children}
      </StackContext.Provider>
  );
}