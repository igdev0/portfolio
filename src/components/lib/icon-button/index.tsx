import Icon, {IconNames} from '@/components/lib/icon';
import "./index.css";
import {cva, VariantProps} from 'class-variance-authority';
import clsx from 'clsx';

export const iconButtonVariants = cva('icon-button', {
  variants: {
    size: {
      sm: 'sm'
    }
  },
  defaultVariants: {
    size: 'sm'
  }
});

export interface IconButtonProps extends VariantProps<typeof iconButtonVariants> {
  icon: IconNames;
  className?: string;
  onClick?: () => void;
}

export default function IconButton(props: IconButtonProps) {
  const {onClick, icon, type, className, ...variants} = props;
  return (
      <button type={type} className={clsx(iconButtonVariants(variants), className)} onClick={onClick}>
        <Icon name={icon}/>
      </button>
  );
}