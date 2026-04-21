import {createSprinkles} from '@vanilla-extract/sprinkles';
import {boxProperties} from './box.css.ts';
import {responsiveProperties} from './responsive.css.ts';
import {colorProperties} from './color.css.ts';

/**
 * 1. Define "Sprinkle" Properties in config.
 * 2. In createStyled -> styled fn, call the sprinkles utility passed from config.
 * 3.
 */



export const cssUtils = createSprinkles(
    responsiveProperties,
    colorProperties,
    boxProperties
);


// It's a good idea to export the Sprinkles type too
export type CssUtils = Parameters<typeof cssUtils>[0];

export const properties = [
    responsiveProperties,
    colorProperties,
    boxProperties
]
