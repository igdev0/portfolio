import {createGlobalTheme} from '@vanilla-extract/css';
import {layers} from './layers.css.ts';

export const breakpoints = createGlobalTheme(":root",{
  '@layer': layers.utilities,
  'breakpoint-sm': "40rem",
  'breakpoint-md': "48rem",
  'breakpoint-lg': "64rem",
  'breakpoint-xl': "80rem",
  'breakpoint-2xl': "96rem",
})