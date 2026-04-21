import "./reset.css.ts";
import {breakpoints} from './breakpoints.css.ts';
import {layers} from './layers.css.ts';
import {colors} from './colors.css.ts';
import {containers} from './containers.css.ts';
import {radius} from './radius.css.ts';
import {spaces} from './spaces.css.ts';
import {text} from './text.css.ts';
import {properties} from '../properties/index.css.ts';

export const theme = {
  properties,
  layers,
  breakpoints,
  colors,
  containers,
  radius,
  spaces,
  text
};

export type ThemeConfig = typeof theme;