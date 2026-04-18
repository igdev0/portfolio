import {addFunctionSerializer} from '@vanilla-extract/css/functionSerializer';
import {runtimeStyledBox} from './runtime';
import type {ElementType} from 'react';
import {style, type StyleRule} from '@vanilla-extract/css';
import {baseL} from './layers.css.ts';


export function styled<T extends ElementType = 'div'>(elementType: T, styles: StyleRule) {
  const className = style({
    '@layer': {
      [baseL]: styles,
    }
  });
  
  const args = [elementType as string, className];

  // First we call our runtime function at build time
  const Component = runtimeStyledBox<T>(elementType, [className]);

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