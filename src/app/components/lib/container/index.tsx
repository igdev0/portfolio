import clsx from 'clsx';
import {PropsWithChildren} from 'react';
import "./index.css";

interface ContainerProps extends PropsWithChildren {
  name?: string;
  className?: string;
  variant?: "default";
}

export default function Container({children, className, name = 'default', variant = 'default'}: ContainerProps) {
  let cls = clsx("container");

  if (name) {
    cls += clsx(` @container/${name}`);
  }

  if (variant) {
    cls += ` ${variant}`;
  }

  if (className) {
    cls += ` ${className}`;
  }


  return (
      <div className="px-8">
        <div className={cls}>
          {children}
        </div>
      </div>
  );
}