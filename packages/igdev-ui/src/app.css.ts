import {styled} from './config.ts';
import {colors} from './theme/colors.css.ts';

export const Box = styled("div", {
  base: {
    padding: '1rem',
    backgroundColor: colors['amber-200'],
  },
  variants: {
    test: {
      true: {
        padding: '1rem',
        backgroundColor: colors['green-200'],
      }
    }
  },
  defaultVariants: {}
});