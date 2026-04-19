import {createGlobalTheme} from '@vanilla-extract/css';
import {utilitiesLayer} from './layers.css.ts';

export const spaces = createGlobalTheme(":root", {
  "@layer": utilitiesLayer,
  sm: "1rem",
  md: "2rem",
  lg: "3rem",
})