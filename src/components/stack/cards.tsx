"use client";
import {ReactElement, useContext, useLayoutEffect} from 'react';
import {StackContext} from '@/components/stack/context';
import {StackCardProps} from '@/components/stack/card';

interface StackCardsProps {
  className?: string;
  children: ReactElement<StackCardProps>[];
}

export default function StackCards(props: StackCardsProps) {
  const {children, className} = props;
  const {setFrames} = useContext(StackContext);

  useLayoutEffect(() => {
    setFrames(children.map((_, index) => ({
      x: 0,
      y: 0,
      scaleZ: 0,
    })));
  }, [children]);

  return (
      <div className={className}>
        {children}
      </div>
  );
}