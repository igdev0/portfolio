import {defineProperties} from '@vanilla-extract/sprinkles';
import {layers} from '../layers.css.ts';

export const boxProperties = defineProperties({
  '@layer': layers.utilities,
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