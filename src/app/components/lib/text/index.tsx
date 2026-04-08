import {PropsWithChildren} from 'react';
import {cva, VariantProps} from 'class-variance-authority';
import Box from '@/app/components/lib/box';

export const textVariants = cva(['text'], {
  variants: {
    size: {
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
    weight: "semibold"
  }
});

interface TextProps extends PropsWithChildren, VariantProps<typeof textVariants> {
  className?: string;
}


export default function AppText(props: TextProps) {
  const {className, children, ...variants} = props;
  return (
      <Box as="h1" className={`${textVariants(variants)} ${className}`}>{children}</Box>
  );
}