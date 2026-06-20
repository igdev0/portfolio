"use client";
import {ReactElement} from 'react';
import {StackCardProps} from '@/components/stack/card';

interface StackCardsProps {
  className?: string;
  children: ReactElement<StackCardProps>[];
}

export default function StackCards(props: StackCardsProps) {
  const {children, className} = props;

  return (
      <div className={className}>
        {children}
      </div>
  );
}