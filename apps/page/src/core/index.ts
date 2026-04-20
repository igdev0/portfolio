import {addFunctionSerializer} from '@vanilla-extract/css/functionSerializer';
import {runtimeStyledBox} from './runtime';
import type {ElementType} from 'react';
import {style, styleVariants} from '@vanilla-extract/css';
import {baseLayer, variantsLayer} from '../styles/global/layers.css.ts';
import type {OptionsType, VariantGroup, VariantProps, WithDefaults} from './types.ts';

export function styled<T extends ElementType, V extends VariantGroup, D extends Partial<VariantProps<V>>>(elementType: T, options: OptionsType<V, D>) {
  const baseClassName = style({
    '@layer': {
      [baseLayer]: options.base??{},
    }
  });

  const variantsMap = {};
  for (const key in options.variants) {
    const unscopedVariantProps = options.variants[key];
    const scopedVariantProps: Record<string, any> = {};
    for (const variantKey in unscopedVariantProps) {
      scopedVariantProps[variantKey as keyof object] = {
        "@layer": {
          [variantsLayer]: unscopedVariantProps[variantKey],
        }
      };
    }

    Object.assign(variantsMap, {[key]: styleVariants(scopedVariantProps)});
  }

  const args = [elementType as string, baseClassName, variantsMap];

  // First we call our runtime function at build time
  const Component = runtimeStyledBox<T, WithDefaults<V, VariantProps<V>, D>>(elementType, baseClassName, variantsMap as Record<keyof V, string>);

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