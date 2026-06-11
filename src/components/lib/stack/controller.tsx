import {PropsWithChildren} from 'react';

export interface StackControllerProps extends PropsWithChildren {
  id: string;
}

export default function StackController(props: StackControllerProps) {
  const {children} = props;
  
  return (
      <div>
        {children}
      </div>
  );
}