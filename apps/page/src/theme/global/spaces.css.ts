import {createGlobalTheme} from '@vanilla-extract/css';
import {layers} from './layers.css.ts';

export const spaces = createGlobalTheme(":root", {
  "@layer": layers.utilities,
  sm: "1rem",
  md: "2rem",
  lg: "3rem",
})