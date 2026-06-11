import {PropsWithChildren} from 'react';

export default function StackControllers(props: PropsWithChildren) {
  const {children} = props;
  return (
      <div>
        {children}
      </div>
  );
}