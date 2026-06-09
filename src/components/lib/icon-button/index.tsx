import Icon, {IconNames} from '@/components/lib/icons';
import {cva, VariantProps} from 'class-variance-authority';
import clsx from 'clsx';
import "./index.css";

export const iconButtonVariants = cva('icons-button', {
  variants: {
    size: {
      sm: 'sm'
    },
  },
  defaultVariants: {
    size: 'sm'
  }
});

export interface IconButtonProps extends VariantProps<typeof iconButtonVariants> {
  icon: IconNames;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function IconButton(props: IconButtonProps) {
  const {onClick, icon, type, className, ...variants} = props;
  return (
      <button className={clsx('icon-button', iconButtonVariants(variants), className)} disabled={props.disabled ?? false} type={type}
              onClick={onClick}>
        <Icon name={icon}/>
      </button>
  );
}