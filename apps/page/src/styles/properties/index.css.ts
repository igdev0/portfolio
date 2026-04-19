import {createSprinkles, defineProperties} from '@vanilla-extract/sprinkles';
import {utilitiesLayer} from '../global/layers.css.ts';
import {colors} from '../global/colors.css.ts';
import {spaces} from '../global/spaces.css.ts';

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
    gap: spaces,

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
    // Margins:
    margin: spaces,
    marginTop: spaces,
    marginBottom: spaces,
    marginLeft: spaces,
    marginRight: spaces,

    // paddings:
    padding: spaces,
    paddingTop: spaces,
    paddingBottom: spaces,
    paddingLeft: spaces,
    paddingRight: spaces
  },
  shorthands: {
    padding: [
      'paddingTop',
      'paddingBottom',
      'paddingLeft',
      'paddingRight'
    ],
    placeItems: ['justifyContent', 'alignItems'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    pl: ['paddingLeft'],
    pr: ['paddingLeft'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],

    marginX: ['marginRight', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    ml: ['marginLeft'],
    mr: ['marginRight'],
    mb: ['marginBottom'],
    mt: ['marginTop'],
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