import type {ComplexStyleRule, StyleRule} from '@vanilla-extract/css';

import {type CssUtils} from '../styles/properties/index.css.ts';
import type {ComponentPropsWithoutRef, createElement, ElementType} from 'react';
import type {PolymorphicForwardedRef, PolymorphicProps} from '@axa-ch/react-polymorphic-types';

export type VariantDefinition<Key extends string> = Record<Key, ComplexStyleRule | string>;
export type VariantGroup<VariantProp extends string = string, VariantValue extends string = string> = Record<VariantProp, VariantDefinition<VariantValue>>;

export type BooleanMap<T> = T extends 'true' | 'false' ? boolean : T;

export type WithDefaults<
  Group extends VariantGroup,
  Target extends VariantProps<Group>,
  Defaults extends Partial<Target>
> =
  Prettify<
      Omit<Target, Extract<keyof Defaults, keyof Target>> &
    Partial<Pick<Target, Extract<keyof Defaults, keyof Target>>>
  >;

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type VariantProps<T extends VariantGroup> =
    Prettify<{
      [K in keyof T]: BooleanMap<keyof T[K]>;
    }>;


export type PropsMap<Props> = Record<keyof Props, Record<string, string>> & {__brand?: "props"};

export type VariantSelection<Variants> = {
  [key in keyof Variants]: BooleanMap<Variants[key]>
}


export interface StyledOptions<Element extends ElementType, Props, Variants extends Partial<PropsMap<Props>>> {
  elementType: Element,
  baseClass: string,
  variants: Variants,
  defaultVariants: Variants,
}

export type OptionsType<Group extends VariantGroup, Defaults extends Partial<VariantProps<Group>>> = {
  base?: StyleRule,
  variants?: Group,
  defaultVariants?: Defaults
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