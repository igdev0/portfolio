import {PropsWithChildren} from 'react';
import "./index.css";
import {cva, VariantProps} from 'class-variance-authority';
import Base from '@/app/components/lib/base';

export const titleVariants = cva(['text'], {
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

interface TitleProps extends PropsWithChildren, VariantProps<typeof titleVariants> {
  className?: string;
}


export default function Title(props: TitleProps) {
  const {className, children, ...variants} = props;
  return (
      <Base as="h1" className={`${titleVariants(variants)} ${className}`}>{children}</Base>
  );
}