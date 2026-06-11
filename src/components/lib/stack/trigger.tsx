import {PropsWithChildren, useContext} from 'react';
import {StackContext} from '@/components/lib/stack/context';

export interface StackControllerProps extends PropsWithChildren {
  id: string;
}

export default function StackTrigger(props: StackControllerProps) {
  const {children} = props;
  const {setActiveId} = useContext(StackContext);
  return (
      <div onClick={() => setActiveId(props.id)}>
        {children}
      </div>
  );
}