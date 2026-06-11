import {PropsWithChildren} from 'react';

interface StackCardProps extends PropsWithChildren {
  id: string;
}

export default function StackCard(props: StackCardProps) {
  const {children} = props;
  return (
      <div>
        {children}
      </div>
  );
}