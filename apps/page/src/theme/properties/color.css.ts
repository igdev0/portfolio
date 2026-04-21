import {defineProperties} from '@vanilla-extract/sprinkles';
import {layers} from '../global/layers.css.ts';
import {colors} from '../global/colors.css.ts';

export const colorProperties = defineProperties({
  '@layer': layers.utilities,
  conditions: {
    lightMode: {},
    darkMode: {
      '@media': '(prefers-color-scheme: dark)'
    }
  },
  defaultCondition: 'lightMode',
  properties: {
    color: colors,
    backgroundColor: colors,
  },
});