import {ReactNode, RefObject} from 'react';
import clsx from 'clsx';
import "./index.css";

export interface PanelProps {
  className?: string;
  children?: ReactNode;
  ref?: RefObject<HTMLDivElement>;
}

export default function Panel(props: PanelProps) {
  const {className, children} = props;
  return (
      <div ref={props.ref} className={clsx('panel', className)}>
        {children}
      </div>
  );
}