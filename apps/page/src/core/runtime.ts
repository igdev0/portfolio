import {type ComponentPropsWithoutRef, createElement, type ElementType} from 'react';
import {type PolymorphicForwardedRef, type PolymorphicProps} from '@axa-ch/react-polymorphic-types';

export type BoxOwnProps<T extends ElementType> = ComponentPropsWithoutRef<T> & {
  ref?: PolymorphicForwardedRef<T>;
};

export type BoxProps<T extends ElementType> = PolymorphicProps<
    BoxOwnProps<T>,
    T
>;


export function runtimeStyledBox<T extends ElementType>(elementType: T, className: string[]) {

  return function Component(props: BoxProps<T>) {
    const {as = elementType, ref, children, ...rest} = props;
    return createElement(
        as,
        {
          ...rest,
          ref,
          className
        },
        children,
    );

  };
}