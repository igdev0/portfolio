import {styled} from './core';
import {colors} from './styles/global/colors.css.ts';
import {spaces} from './styles/global/spaces.css.ts';

/**
 * Styles Power Distribution:
 * 1. Overrides can be done just at the definition time.
 * 2. Recipes objects are passed explicitly as "recipe".
 * 3. Flex, Grid, Block are display domains available as Component.display
 */

export const Box = styled("div", {
  base: {
    padding: spaces.sm
  },
  variants: {
    example: {
      true: {
        padding: "sm",
      }
    },
    great: {
      1: {
        backgroundColor: colors['amber-300'],
      },
      2: {
        backgroundColor: colors['orange-400'],
      },
      3: {
        backgroundColor: colors['red-300'],
      }
    },
  },
  defaultVariants: {
    example: true,
    great: 3,
  }
});