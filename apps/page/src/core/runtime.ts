import {createElement, type ElementType} from 'react';
import type {StyledComponentProps, StyledComponentType} from './types.ts';
import {cssUtils} from '../styles/properties/index.css.ts';


/*
export interface Display<Element extends ElementType> {
  flex: StyledComponent<Element>,
  grid: StyledComponent<Element>,
  block: StyledComponent<Element>,
  inline: StyledComponent<Element>,
}*/

export function runtimeStyledBox<Element extends ElementType, V>(elementType: Element, baseClassName: string, variants: Record<keyof V, string>) {

  function StyledComponent<PolymorphicElement extends ElementType = Element>(props: StyledComponentProps<PolymorphicElement, V>) {
    const {as = elementType, ref, children, ...rest} = props;
    const attrs = {};
    const selectedVariants = [];
    const utils = {};

    for (const key of Object.keys(rest)) {
      if (cssUtils.properties.has(key as keyof object)) {
        Object.assign(utils, {[key]: rest[key as keyof object]});
      } else if (variants[key]) {
        selectedVariants.push(variants[key][rest[key]]);
      } else {
        Object.assign(attrs, {[key]: rest[key as keyof object]});
      }
    }

    return createElement(
        as,
        {
          ...attrs,
          ref,
          className: [baseClassName, ...selectedVariants, cssUtils(utils)].join(" ")
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

  return StyledComponent as StyledComponentType<Element, V>;

}