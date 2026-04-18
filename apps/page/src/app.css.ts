import {styled} from './core';

/**
 * Styles Power Distribution:
 * 1. Overrides can be done just at the definition time.
 * 2. Recipes objects are passed explicitly as "recipe".
 * 3. Flex, Grid, Block are display domains available as Component.display
 */
export const Button = styled("button", {
  backgroundColor: "purple",
});

export const Box = styled("div", {})