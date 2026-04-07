import Icon, {IconNames} from '@/app/components/lib/icon';
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
  icon: IconNames;
}

export default function IconButton({onClick, icon, className, ...props}: IconButtonProps) {

  return (
      <button className={clsx(iconButtonVariants(props), className)} onClick={onClick}>
        <Icon name={icon}/>
      </button>
  );
}