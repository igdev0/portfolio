import {styled} from './core';
import {colors} from './core/colors.css.ts';

/**
 * Styles Power Distribution:
 * 1. Overrides can be done just at the definition time.
 * 2. Recipes objects are passed explicitly as "recipe".
 * 3. Flex, Grid, Block are display domains available as Component.display
 */
export const Button = styled("button", {
  backgroundColor: colors['blue-900'],
});

export const Box = styled("div", {});