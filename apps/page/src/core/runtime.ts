import {createElement, type ElementType} from 'react';
import type {PropsMap, StyledComponentProps, StyledComponentType, StyledOptions} from './types.ts';
import {cssUtils} from '../styles/properties/index.css.ts';


/*
export interface Display<Element extends ElementType> {
  flex: StyledComponent<Element>,
  grid: StyledComponent<Element>,
  block: StyledComponent<Element>,
  inline: StyledComponent<Element>,
}*/


export function runtimeStyledBox<Element extends ElementType, Props>(args: StyledOptions<Element, Props, Partial<PropsMap<Props>>>) {
  const {elementType, variants, defaultVariants, baseClass} = args;

  function StyledComponent<As extends ElementType = Element>(props: StyledComponentProps<As, Props>) {
    const {as = elementType, ref, children, ...rest} = props;
    const attrs = {};
    const selectedVariants = [];
    const utils = {};

    const propsWithDefault = {...defaultVariants, ...rest};

    for (const key in propsWithDefault) {
      if (cssUtils.properties.has(key as keyof object)) {
        // 1. Apply utilities from props
        Object.assign(utils, {[key]: propsWithDefault[key as keyof object]});
      } else if (variants[key]) {
        // 2. Apply styles
        selectedVariants.push(variants[key][propsWithDefault[key]]);
      } else {
        // 3. Forward Other React Props
        Object.assign(attrs, {[key]: propsWithDefault[key as keyof object]});
      }
    }

    return createElement(
        as,
        {
          ...attrs,
          ref,
          className: [baseClass, ...selectedVariants, cssUtils(utils)].join(" ")
        },
        children,
    );

  }

  /*

    StyledComponent.flex = function flex<Element extends ElementType>(props: BoxProps<Element>) {
      return StyledComponent({display: "flex", ...props});
    };

    StyledComponent.grid = function grid<Element extends ElementType>(props: BoxProps<Element>) {
      return StyledComponent({display: "grid", ...props});
    };

    StyledComponent.block = function block<Element extends ElementType>(props: BoxProps<Element>) {
      return StyledComponent({display: "block", ...props});
    };

    StyledComponent.inline = function inline<Element extends ElementType>(props: BoxProps<Element>) {
      return StyledComponent({display: "inline", ...props});
    };
  */

  return StyledComponent as StyledComponentType<Element, Props>;

}