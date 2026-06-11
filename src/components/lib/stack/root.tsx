import {StackContext} from '@/components/lib/stack/context';
import {PropsWithChildren} from 'react';

export default function StackRoot(props: PropsWithChildren) {
  const {children} = props;
  return (
      <StackContext.Provider value={{}}>
        {children}
      </StackContext.Provider>
  );
}