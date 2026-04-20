import {createElement, type ElementType} from 'react';
import type {StyledComponent, StyledComponentProps} from './types.ts';
import {cssUtils} from '../styles/properties/index.css.ts';


/*
export interface Display<Element extends ElementType> {
  flex: StyledComponent<Element>,
  grid: StyledComponent<Element>,
  block: StyledComponent<Element>,
  inline: StyledComponent<Element>,
}*/

export function runtimeStyledBox<Element extends ElementType>(elementType: Element, className: string) {

  function StyledComponent<PolymorphicElement extends ElementType = Element>(props: StyledComponentProps<PolymorphicElement>) {
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
          className: [className, cssUtils(utils)].join(" ")
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

  return StyledComponent as StyledComponent<Element>;

}