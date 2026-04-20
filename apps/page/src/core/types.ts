import type {ComplexStyleRule, StyleRule} from '@vanilla-extract/css';

import {type CssUtils} from '../styles/properties/index.css.ts';
import type {ComponentPropsWithoutRef, createElement, ElementType} from 'react';
import type {PolymorphicForwardedRef, PolymorphicProps} from '@axa-ch/react-polymorphic-types';

export type VariantDefinition<Key extends string> = Record<Key, ComplexStyleRule>;
export type VariantGroup<VariantProp extends string = string, VariantValue extends string = string> = Record<VariantProp, VariantDefinition<VariantValue>>;


type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type VariantProps<T extends VariantGroup> =
    Prettify<{
      [K in keyof T]: keyof T[K];
    }>;


export type OptionsType<Group extends VariantGroup> = {
  base: StyleRule,
  variants: Group,
}


export type StyledComponentOwnedProps<Element extends ElementType, V> = ComponentPropsWithoutRef<Element> & {
  ref?: PolymorphicForwardedRef<Element>;
} &  CssUtils & V;


export type StyledComponentProps<Element extends ElementType, V> = PolymorphicProps<
    StyledComponentOwnedProps<Element, V>,
    Element
>;

export type StyledComponentType<Element extends ElementType, V> = <
    PolymorphicElement extends ElementType = Element
>(
    props: StyledComponentProps<PolymorphicElement, V>
) => ReturnType<typeof createElement>;