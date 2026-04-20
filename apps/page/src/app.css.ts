import {styled} from './core';
import {colors} from './styles/global/colors.css.ts';

/**
 * Styles Power Distribution:
 * 1. Overrides can be done just at the definition time.
 * 2. Recipes objects are passed explicitly as "recipe".
 * 3. Flex, Grid, Block are display domains available as Component.display
 */

export const Layout = styled("div", {
});

export const Box = styled("div", {
  base: {
    backgroundColor: colors['amber-500']
  },
  variants: {
    test: {
      "first": {
        width: "100%",
      },
      "second": {
        backgroundColor: colors['blue-300'],
      }
    },
    rounded: {
      true: {
        borderRadius: '5px'
      }
    }
  },
  defaultVariants: {
    rounded: true
  }
});

export const Button = styled("button", {
  base: {},
  variants: {}
});