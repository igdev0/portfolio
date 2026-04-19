import {createGlobalTheme} from '@vanilla-extract/css';
import {utilitiesLayer} from './layers.css.ts';

export const spaces = createGlobalTheme(":root", {
  "@layer": utilitiesLayer,
  sm: "10",
  md: "20",
  lg: "30",
})