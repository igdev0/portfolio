import Icon, {IconTypes} from '@/app/components/lib/icon';
import {JSX} from 'react';
import "./index.css";
import {cva, VariantProps} from 'class-variance-authority';
import clsx from 'clsx';

const iconButtonVariants = cva('icon-button', {
  variants: {
    size: {
      sm: 'sm'
    }
  },
  defaultVariants: {
    size: 'sm'
  }
});

interface IconButtonProps extends VariantProps<typeof iconButtonVariants> {
  onClick?: () => void;
  className?: string;
  icon: IconTypes;
}

export default function IconButton({onClick, icon, className, ...props}: IconButtonProps): JSX.Element {

  return (
      <button className={clsx(iconButtonVariants(props), className)} onClick={onClick}>
        <Icon type={icon}/>
      </button>
  );
}