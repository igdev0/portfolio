import {PropsWithChildren} from 'react';
import "./index.css";
import clsx from 'clsx';

interface ButtonProps extends PropsWithChildren {
  variant?: 'primary' | 'default' | 'outline';
}

export default function Button({variant = "primary", children}: ButtonProps) {
  return (
      <button className={clsx(`button button--${variant}`)}>
        {children}
      </button>
  );
}