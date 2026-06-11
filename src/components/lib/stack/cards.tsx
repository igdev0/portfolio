import {ReactNode, useContext, useLayoutEffect} from 'react';
import {StackContext} from '@/components/lib/stack/context';

interface StackCardsProps {
  children: ReactNode[];
}

export default function StackCards(props: StackCardsProps) {
  const {children} = props;
  const {setTotalCards} = useContext(StackContext);

  useLayoutEffect(() => {
    setTotalCards(children.length);
  }, [children]);

  return (
      <div>
        {children}
      </div>
  );
}