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
    /**
     * Some comment made about this
     */
    great: {
      1: {
        backgroundColor: colors['amber-300'],
      },
      2: {
        position: "relative",
        backgroundColor: colors['indigo-400'],
        ":hover": {
          backgroundColor: colors['amber-200']
        },
        ":before": {
          content: "",
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundColor: colors['amber-300']
        }
      },
      3: {
        backgroundColor: colors['red-300'],
      }
    },
    example: {
      true: {
        backgroundColor: colors['indigo-400'],
        ":hover": {
          backgroundColor: colors['indigo-600'],
        }
      }
    }
  },
  defaultVariants: {
    example: true,
    great: 2,
  }
});