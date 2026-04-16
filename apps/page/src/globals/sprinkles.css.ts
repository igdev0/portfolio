import {createSprinkles, defineProperties} from '@vanilla-extract/sprinkles';
import colorsCss from './colors.css.ts';

const space = {
  none: 0,
  small: '4px',
  medium: '8px',
  large: '16px'
  // etc.
};

export const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: {'@media': 'screen and (min-width: 768px)'},
    desktop: {'@media': 'screen and (min-width: 1024px)'}
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
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
    // etc.
  },
  shorthands: {
    padding: [
      'paddingTop',
      'paddingBottom',
      'paddingLeft',
      'paddingRight'
    ],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems']
  }
});

/**
 * Comments:
 I will eventually need:
 •	surface (base card / container)
 •	surface-raised (modals, dropdowns)
 •	surface-sunken (inputs, code blocks)
 •	surface-hover
 */

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: {'@media': '(prefers-color-scheme: dark)'}
  },
  defaultCondition: 'lightMode',
  properties: {
    color: colorsCss,
    backgroundColor: colorsCss
  }
});

export const sprinkles = createSprinkles(
    responsiveProperties,
    colorProperties
);


// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];

