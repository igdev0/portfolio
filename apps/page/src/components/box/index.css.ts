import {createSprinkles, defineProperties} from '@vanilla-extract/sprinkles';
import colorsCss from '../../globals/colors.css.ts';

export const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: {'@media': 'screen and (min-width: 768px)'},
    desktop: {'@media': 'screen and (min-width: 1024px)'}
  },
  defaultCondition: 'mobile',
  properties: {},
  shorthands: {}
});

export const boundingBox = defineProperties({
  properties: {
    width: {
      full: "100%",
      half: "50%",
    },
    height: {
      full: "100%",
      half: "50%",
      screen: "100vh"
    },
  },
  shorthands: {
    w: ["width"],
    h: ["height"],
  }
})

export const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: {'@media': '(prefers-color-scheme: dark)'}
  },
  defaultCondition: 'lightMode',
  properties: {
    color: colorsCss,
    backgroundColor: colorsCss
  },
  shorthands: {
    c: ['color'],
    bgc: ['backgroundColor'],
  }
});

export const baseProps = createSprinkles(
    boundingBox
);

export type BaseProps = Parameters<typeof baseProps>[0];

