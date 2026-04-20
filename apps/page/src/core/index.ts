import {addFunctionSerializer} from '@vanilla-extract/css/functionSerializer';
import {runtimeStyledBox} from './runtime';
import type {ElementType} from 'react';
import {style, type StyleRule, styleVariants} from '@vanilla-extract/css';
import {baseLayer, variantsLayer} from '../styles/global/layers.css.ts';
import type {OptionsType, PropsMap, VariantGroup, VariantProps, WithDefaults} from './types.ts';

export function styled<As extends ElementType,
    Props extends VariantGroup,
    DefaultProps extends Partial<VariantProps<Props>>>(elementType: As, options: OptionsType<Props, DefaultProps>) {

  const baseClass = style({
    '@layer': {
      [baseLayer]: options.base ?? {},
    }
  });

  const variantsMap: Partial<PropsMap<Props>> = {};
  const defaultVariantsMap: Partial<PropsMap<Props>> = {};

  for (const key in options.variants) {
    const unscopedVariantProps = options.variants[key];
    const scopedVariantProps: Record<string, StyleRule> = {};
    for (const variantKey in unscopedVariantProps) {
      scopedVariantProps[variantKey] = {
        "@layer": {
          [variantsLayer]: unscopedVariantProps[variantKey],
        }
      };
    }

    if (Object.hasOwn(options.defaultVariants, key)) {
      Object.assign(defaultVariantsMap, {[key]: styleVariants(scopedVariantProps)});
    }

    Object.assign(variantsMap, {[key]: styleVariants(scopedVariantProps)});
  }

  const args = [{
    elementType: elementType as string,
    baseClass,
    variants: variantsMap,
    defaultVariants: defaultVariantsMap
  }];
  // elementType, baseClassName, variantsMap as Record<keyof V, string>
  // First we call our runtime function at build time
  const Component = runtimeStyledBox<As, WithDefaults<Props, VariantProps<Props>, DefaultProps>>({
    elementType,
    baseClass,
    variants: variantsMap,
    defaultVariants: defaultVariantsMap,
  });

  // Then we tell vanilla-extract how to serialize the previous
  // function call by annotating its return value
  addFunctionSerializer(Component, {
    importPath: './core/runtime',
    importName: 'runtimeStyledBox',
    args
  });

  // Return the result of calling the runtime function
  return Component;
}