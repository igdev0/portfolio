import Icon, {IconNames} from '@/components/lib/icons';
import "./index.css";
import {cva, VariantProps} from 'class-variance-authority';
import clsx from 'clsx';

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
      <button disabled={props.disabled??false} type={type} className={clsx(iconButtonVariants(variants), className)} onClick={onClick}>
        <Icon name={icon}/>
      </button>
  );
}