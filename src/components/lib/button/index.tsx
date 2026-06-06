import {ComponentPropsWithRef, PropsWithChildren} from 'react';
import "./index.css";
import {cva, VariantProps} from 'class-variance-authority';
import Icon, {IconNames} from '@/components/lib/social';

export const buttonVariants = cva('button', {
  variants: {
    variant: {
      solid: 'button--solid',
      secondary: 'button--secondary',
      'solid-light': 'button--solid-light',
      outline: 'button--outline',
    },
    aspect: {
      square: 'button--square',
    },
    size: {
      xs: "button--extra-small",
      small: 'button--small',
      medium: 'button--medium'
    },
  },

  defaultVariants: {
    variant: "solid",
    size: 'medium'
  },

});

export interface ButtonProps extends PropsWithChildren, VariantProps<typeof buttonVariants>, ComponentPropsWithRef<"button"> {
  className?: string;
  onClick?: () => void;
  icon?: IconNames;
  iconPosition?: "left" | 'right';
  active?: boolean;
  disabled?: boolean;
}

export default function Button(props: ButtonProps) {
  const {className, ref, children, icon, iconPosition = 'left', disabled, active, onClick, ...variants} = props;
  return (
      <button ref={ref} className={`${buttonVariants(variants)} icon--${iconPosition} ${className ?? ""} ${active ? "button--active" : ''}`}
              disabled={disabled ?? false} onClick={onClick}>
        {icon && iconPosition === 'left' && <Icon name={icon}/>}
        {children}
        {icon && iconPosition === 'right' && <Icon name={icon}/>}
      </button>
  );
}