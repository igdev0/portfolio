import Icon, {IconProps} from '@/components/ui/icon';
import {JSX} from 'react';
import clsx from 'clsx';

interface IconButtonProps extends IconProps {
  className?: string;
  onClick?: () => void;
  size?: "small";
}

export default function IconButton({onClick, type, size = "small", className}: IconButtonProps): JSX.Element {
  const iconButtonClass = size === 'small' ? 'w-6' : undefined;
  return (
      <button className={clsx(iconButtonClass, 'cursor-pointer', className)} onClick={onClick}>
        <Icon type={type}/>
      </button>
  );
}