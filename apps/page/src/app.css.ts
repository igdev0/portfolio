import {styled} from './core';
import {colors} from './styles/global/theme.css.ts';

/**
 * Styles Power Distribution:
 * 1. Overrides can be done just at the definition time.
 * 2. Recipes objects are passed explicitly as "recipe".
 * 3. Flex, Grid, Block are display domains available as Component.display
 */

export const Layout = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  gap: 10
})

export const Box = styled("div", {
  aspectRatio: "1",
  padding: 30,
  backgroundColor: colors['amber-300']
});