import type {ComplexStyleRule, StyleRule} from '@vanilla-extract/css';

export type VariantDefinition<Key extends string> = Record<Key, ComplexStyleRule>;
export type VariantGroup<VariantProp extends string = string, VariantValue extends string = string> = Record<VariantProp, VariantDefinition<VariantValue>>;


type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type VariantProps<T extends VariantGroup> =
    Prettify<{
      [K in keyof T]: keyof T[K];
    }>;


export type OptionsType = {
  base: StyleRule,
  variants: VariantGroup,
}