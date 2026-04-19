import {createGlobalTheme,} from '@vanilla-extract/css';
import {utilitiesLayer} from './layers.css.ts';
import "./colors.css.ts";
import {colorsTokens} from './colors.css.ts';

export const colors = createGlobalTheme(":root", {
  '@layer': utilitiesLayer,
  ...colorsTokens,
});