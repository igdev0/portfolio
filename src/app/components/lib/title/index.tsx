import {PropsWithChildren} from 'react';
import "./index.css";
import clsx from 'clsx';

interface TitleProps extends PropsWithChildren {
  size?: "5xl" | "4xl";
  weight?: "normal" | "bold" | "semibold";
  as?: "h1" | "h2";
}

export default function Title({size = '5xl', weight = 'semibold', children}: TitleProps) {
  let cls = clsx("title");
  if(size) {
    cls += clsx(` title--size-${size}`);
  }

  if(weight) {
    cls += clsx(` title--weight-${weight}`);
  }

  return (
      <h1 className={cls}>{children}</h1>
  );
}