import {CardFrame, StackContext} from '@/components/lib/stack/context';
import {PropsWithChildren, useState} from 'react';

export default function StackRoot(props: PropsWithChildren) {
  const [active, setActive] = useState(0);
  const [frames, setFrames] = useState<CardFrame[]>([]);

  const {children} = props;

  return (
      <StackContext.Provider value={{frames, setFrames, active, setActive}}>
        {children}
      </StackContext.Provider>
  );
}