import {PropsWithChildren} from 'react';
import "./index.css";
import {cva, VariantProps} from 'class-variance-authority';
import Icon, {IconNames} from '@/app/components/lib/icon';

export const buttonVariants = cva('button', {
  variants: {
    variant: {
      solid: 'button--solid',
      secondary: 'button--secondary',
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
  icon?: IconNames;
  disabled?: boolean;
}

export default function Button(props: ButtonProps) {
  const {className, children, icon, disabled, onClick, ...variants} = props;
  return (
      <button className={`${buttonVariants(variants)} ${className}`} disabled={disabled ?? false} onClick={onClick}>
        {icon && <Icon name={icon}/>}
        {children}
      </button>
  );
}