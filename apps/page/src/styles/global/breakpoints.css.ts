import {createGlobalTheme} from '@vanilla-extract/css';
import {utilitiesLayer} from './layers.css.ts';

export const breakpoints = createGlobalTheme(":root",{
  '@layer': utilitiesLayer,
  'breakpoint-sm': "40rem",
  'breakpoint-md': "48rem",
  'breakpoint-lg': "64rem",
  'breakpoint-xl': "80rem",
  'breakpoint-2xl': "96rem",
})