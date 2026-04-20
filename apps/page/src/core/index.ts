import {addFunctionSerializer} from '@vanilla-extract/css/functionSerializer';
import {runtimeStyledBox} from './runtime';
import type {ElementType} from 'react';
import {style, styleVariants} from '@vanilla-extract/css';
import {baseLayer} from '../styles/global/layers.css.ts';
import type {OptionsType, VariantGroup, VariantProps, WithDefaults} from './types.ts';


export function styled<T extends ElementType, V extends VariantGroup, D extends Partial<VariantProps<V>>>(elementType: T, options: OptionsType<V, D>) {
  const baseClassName = style({
    '@layer': {
      [baseLayer]: options.base,
    }
  });

  const variantsClasses = styleVariants(options.variants);
  const args = [elementType as string, baseClassName];
  // First we call our runtime function at build time
  const Component = runtimeStyledBox<T, WithDefaults<V, VariantProps<V>, D>>(elementType, baseClassName);

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