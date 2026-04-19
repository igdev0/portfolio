import {type ComponentPropsWithoutRef, createElement, type ElementType} from 'react';
import {type PolymorphicForwardedRef, type PolymorphicProps} from '@axa-ch/react-polymorphic-types';
import {type CssUtils, cssUtils} from '../config/utils.css.ts';

export type BoxOwnProps<T extends ElementType> = ComponentPropsWithoutRef<T> & {
  ref?: PolymorphicForwardedRef<T>;
} & CssUtils;

export type BoxProps<T extends ElementType> = PolymorphicProps<
    BoxOwnProps<T>,
    T
>;

export type StyledComponent<T extends ElementType> = <
    C extends ElementType = T
>(
    props: BoxProps<C>
) => ReturnType<typeof createElement>;

export interface Display<T extends ElementType> {
  flex?: StyledComponent<T>,
  grid?: StyledComponent<T>,
  block?: StyledComponent<T>,
  inline?: StyledComponent<T>,
}

export function runtimeStyledBox<T extends ElementType>(elementType: T, className: string[]) {

  function StyledComponent<C extends ElementType = T>(props: BoxProps<C>) {
    const {as = elementType, ref, children, ...rest} = props;
    const attrs = {};
    const utils = {};

    for (const key of Object.keys(rest)) {
      if (cssUtils.properties.has(key as keyof object)) {
        Object.assign(utils, {[key]: rest[key as keyof object]});
      } else {
        Object.assign(attrs, {[key]: rest[key as keyof object]});
      }
    }
    return createElement(
        as,
        {
          ...attrs,
          ref,
          className: [
            className,
            cssUtils(utils)].join(" ")
        },
        children,
    );

  }

  StyledComponent.flex = function flex<T extends ElementType>(props: BoxProps<T>) {
    return StyledComponent({display: "flex", ...props});
  };

  StyledComponent.grid = function grid<T extends ElementType>(props: BoxProps<T>) {
    return StyledComponent({display: "grid", ...props});
  };

  StyledComponent.block = function block<T extends ElementType>(props: BoxProps<T>) {
    return StyledComponent({display: "block", ...props});
  };

  StyledComponent.inline = function inline<T extends ElementType>(props: BoxProps<T>) {
    return StyledComponent({display: "inline", ...props});
  };

  return StyledComponent as StyledComponent<T> & Display<T>;

}