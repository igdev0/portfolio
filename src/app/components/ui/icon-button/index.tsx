import Icon, {IconProps} from '@/app/components/ui/icon';
import {JSX} from 'react';
import clsx from 'clsx';
import "./index.css";

interface IconButtonProps extends IconProps {
  className?: string;
  onClick?: () => void;
  size?: "small";
}

export default function IconButton({onClick, type, size = "small", className}: IconButtonProps): JSX.Element {
  let cls = clsx('icon-button');

  if (size) {
    cls += clsx(` icon-button--${size}`);
  }

  cls += " " + (className ?? "");

  return (
      <button className={cls} onClick={onClick}>
        <Icon type={type}/>
      </button>
  );
}