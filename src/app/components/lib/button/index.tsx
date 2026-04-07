import {PropsWithChildren} from 'react';
import "./index.css";
import {cva, VariantProps} from 'class-variance-authority';

export const buttonVariants = cva('button', {
  variants: {
    variant: {
      solid: 'button--solid',
      outline: 'button--outline',
    }
  },
  defaultVariants: {
    variant: "solid"
  }
});

export interface ButtonProps extends PropsWithChildren, VariantProps<typeof buttonVariants> {
  className?: string;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const {className, children, ...variants} = props;
  return (
      <button className={`${buttonVariants(variants)} ${className}`}>
        {children}
      </button>
  );
}