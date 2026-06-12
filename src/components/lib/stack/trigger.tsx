import {PropsWithChildren, useContext} from 'react';
import {StackContext} from '@/components/lib/stack/context';
import Button from '@/components/lib/button';
import {IconNames} from '@/components/lib/icons';

export interface StackControllerProps extends PropsWithChildren {
  id: number;
  icon?: IconNames
}

export default function StackTrigger(props: StackControllerProps) {
  const {children, icon} = props;
  const {setActive} = useContext(StackContext);
  return (
      <Button variant="secondary" icon={icon} onClick={() => setActive(props.id)}>
        {children}
      </Button>
  );
}