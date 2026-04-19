import {defineProperties} from '@vanilla-extract/sprinkles';
import {utilitiesLayer} from '../global/layers.css.ts';

export const sizeCss = defineProperties({
  '@layer': utilitiesLayer,
  properties: {
    width: {
      full: "100%",
    },
    height: {
      full: "100%",
    },
    aspectRatio: {
      square: "1",
      "1/2": "1/2",
    }
  },
  shorthands: {
    "w": ["width"],
    "h": ["height"],
    "aspect": ["aspectRatio"],
  }
})