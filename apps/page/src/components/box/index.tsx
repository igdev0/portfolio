import {type ComponentPropsWithoutRef, createElement, type ElementType} from 'react';
import {type PolymorphicForwardedRef, type PolymorphicProps} from '@axa-ch/react-polymorphic-types';
import {type BaseProps} from './index.css.ts';

export type BoxOwnProps<T extends ElementType> = ComponentPropsWithoutRef<T> & {
  ref?: PolymorphicForwardedRef<T>;
  "example:testing"?: boolean;
} & BaseProps;

export type BoxProps<T extends ElementType> = PolymorphicProps<
    BoxOwnProps<T>,
    T
>;

export default function Box<T extends ElementType = 'div'>(props: BoxProps<T>) {
  const {as = 'div', ref, children, ...rest} = props;

  return createElement(
      as,
      {
        ...rest,
        ref,
      },
      children,
  );

}