import {ReactElement, useContext, useLayoutEffect} from 'react';
import {StackContext} from '@/components/lib/stack/context';
import {StackCardProps} from '@/components/lib/stack/card';

interface StackCardsProps {
  children: ReactElement<StackCardProps>[];
}

export default function StackCards(props: StackCardsProps) {
  const {children} = props;
  const {setCards, activeId} = useContext(StackContext);

  useLayoutEffect(() => {
    const ids = children.map(child => child.props.id);
    setCards(ids);
  }, [children]);

  return (
      <div className="grid">
        {activeId} = Active
        {children}
      </div>
  );
}