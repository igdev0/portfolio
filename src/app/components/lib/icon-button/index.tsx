import Icon, {IconNames} from '@/app/components/lib/icon';
import "./index.css";
import {cva, VariantProps} from 'class-variance-authority';
import clsx from 'clsx';
import {ButtonProps} from '@/app/components/lib/button';

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

export interface IconButtonProps extends VariantProps<typeof iconButtonVariants>, ButtonProps {
  icon: IconNames;
}

export default function IconButton(props: IconButtonProps) {
  const {onClick, icon, className, ...variants} = props;
  return (
      <button className={clsx(iconButtonVariants(variants), className)} onClick={onClick}>
        <Icon name={icon}/>
      </button>
  );
}