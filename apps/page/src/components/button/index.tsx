import {base} from './index.css.ts';
import clsx from 'clsx';
import type {ButtonProps} from './index.types.ts';

export default function Button(props: ButtonProps) {
  return (
      <button className={clsx(base)}>
        {props.text}
      </button>
  );
}