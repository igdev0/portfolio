import {PropsWithChildren} from 'react';
import "./index.css";
import {cva, VariantProps} from 'class-variance-authority';

export const titleVariants = cva(['text'], {
  variants: {
    size: {
      '4xl': "text-4xl",
      '5xl': "text-5xl",
    },
    weight: {
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
}


export default function Title(props: TitleProps) {

  return (
      <h1 className={titleVariants(props)}>{props.children}</h1>
  );
}