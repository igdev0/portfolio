import {type ComponentPropsWithoutRef, createElement, type ElementType} from 'react';
import {type PolymorphicForwardedRef, type PolymorphicProps} from '@axa-ch/react-polymorphic-types';

export type BoxOwnProps<T extends ElementType> = ComponentPropsWithoutRef<T> & {
  ref?: PolymorphicForwardedRef<T>;
};

export type BoxProps<T extends ElementType> = PolymorphicProps<
    BoxOwnProps<T>,
    T
>;

export default function Box<T extends ElementType = 'div'>({
                                                             as = 'div', ref, children,
                                                             ...rest
                                                           }: BoxProps<T>) {
  return createElement(
      as,
      {
        ...rest,
        ref,
      },
      children,
  );

}