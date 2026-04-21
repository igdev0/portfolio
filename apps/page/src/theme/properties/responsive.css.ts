import {defineProperties} from '@vanilla-extract/sprinkles';
import {layers} from '../global/layers.css.ts';
import {spaces} from '../global/spaces.css.ts';

export const responsiveProperties = defineProperties({
  '@layer': layers.utilities,
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
    gridTemplateColumns: {
      "1": "1fr",
      "2": "1fr 1fr",
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

    p: ['padding'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    pl: ['paddingLeft'],
    pr: ['paddingLeft'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],

    m: ['margin'],
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