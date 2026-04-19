import {createSprinkles, defineProperties} from '@vanilla-extract/sprinkles';
import {utilitiesLayer} from './global/layers.css.ts';
import {colors} from './global/colors.css.ts';

const space = {
  none: 0,
  small: '.5rem',
  medium: '1rem',
  large: '2rem'
};

const responsiveProperties = defineProperties({
  '@layer': utilitiesLayer,
  conditions: {
    mobile: {},
    tablet: {'@media': 'screen and (min-width: 768px)'},
    desktop: {'@media': 'screen and (min-width: 1024px)'}
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'grid', 'inline'],
    flexDirection: ['row', 'column'],
    gap: {
      sm: '1rem',
      md: '1rem',
    },
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between'
    ],
    alignItems: [
      'stretch',
      'flex-start',
      'center',
      'flex-end'
    ],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space
  },
  shorthands: {
    padding: [
      'paddingTop',
      'paddingBottom',
      'paddingLeft',
      'paddingRight'
    ],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  }
});

const colorProperties = defineProperties({
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
  '@layer': utilitiesLayer,
});


export const cssUtils = createSprinkles(
    responsiveProperties,
    colorProperties
);


// It's a good idea to export the Sprinkles type too
export type CssUtils = Parameters<typeof cssUtils>[0];