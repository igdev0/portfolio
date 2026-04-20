import {addFunctionSerializer} from '@vanilla-extract/css/functionSerializer';
import {runtimeStyledBox} from './runtime';
import type {ElementType} from 'react';
import {style} from '@vanilla-extract/css';
import {baseLayer} from '../styles/global/layers.css.ts';
import type {OptionsType} from './types.ts';


export function styled<T extends ElementType>(elementType: T, options: OptionsType) {
  const className = style({
    '@layer': {
      [baseLayer]: options.base,
    }
  });

  const args = [elementType as string, className];

  // First we call our runtime function at build time
  const Component = runtimeStyledBox<T>(elementType, className);

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