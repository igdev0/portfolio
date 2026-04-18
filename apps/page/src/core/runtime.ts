import {type ComponentPropsWithoutRef, createElement, type ElementType} from 'react';
import {type PolymorphicForwardedRef, type PolymorphicProps} from '@axa-ch/react-polymorphic-types';
import {type CssUtils, cssUtils} from './utils.css.ts';

export type BoxOwnProps<T extends ElementType> = ComponentPropsWithoutRef<T> & {
  ref?: PolymorphicForwardedRef<T>;
} & CssUtils;

export type BoxProps<T extends ElementType> = PolymorphicProps<
    BoxOwnProps<T>,
    T
>;


export function runtimeStyledBox<T extends ElementType>(elementType: T, className: string[]) {

  return function Component<C extends ElementType = T>(props: BoxProps<C>) {
    const {as = elementType, ref, children, ...rest} = props;
    const attrs = {};
    const utils = {};

    for (const key of Object.keys(rest)) {
      if (cssUtils.properties.has(key as keyof object)) {
        Object.assign(utils, {[key]: rest[key]});
      } else {
        Object.assign(attrs, {[key]: rest[key]});
      }
    }
    return createElement(
        as,
        {
          ...attrs,
          ref,
          className: [cssUtils(utils), className].join(" ")
        },
        children,
    );

  };
}