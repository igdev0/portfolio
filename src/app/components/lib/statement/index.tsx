import {PropsWithChildren} from 'react';
import clsx from 'clsx';
import "./index.css";

interface Props extends PropsWithChildren {
  className?: string;
}

export default function Statement(props: Props) {
  let boxCls = clsx('statement', props.className);
  return (
      <div className={boxCls}>
        <p>
          {props.children}
        </p>
      </div>
  );
}