import {cva, VariantProps} from 'class-variance-authority';
import Box from '@/app/components/lib/box';
import {BoxProps} from '@/app/components/lib/box/types';
import {PropsWithChildren} from 'react';

export const textVariants = cva(['text'], {
  variants: {
    size: {
      'p': "text-sm",
      '3xl': "text-3xl",
      '4xl': "text-4xl",
      '5xl': "text-5xl",
    },
    weight: {
      normal: 'font-normal',
      bold: 'font-bold',
      semibold: 'font-semibold',
    }
  },
  defaultVariants: {
    size: '5xl',
    weight: "normal"
  }
});

type TextProps = BoxProps & VariantProps<typeof textVariants>;

export default function AppText(props: TextProps & PropsWithChildren) {
  const {className, children, as = 'p', ...variants} = props;
  return (
      <Box as={as} className={`${textVariants(variants)} ${className}`}>{children}</Box>
  );
}