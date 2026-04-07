import {PropsWithChildren} from 'react';
import "./index.css";
import {cva, VariantProps} from 'class-variance-authority';

const buttonVariants = cva('button', {
  variants: {
    variant: {
      solid: 'solid',
      outline: 'outline',
    }
  },
  defaultVariants: {
    variant: "solid"
  }
});

interface ButtonProps extends PropsWithChildren, VariantProps<typeof buttonVariants> {
}

export default function Button(props: ButtonProps) {
  return (
      <button className={buttonVariants(props)}>
        {props.children}
      </button>
  );
}