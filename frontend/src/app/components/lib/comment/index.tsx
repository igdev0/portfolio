import {Ref} from 'react';
import "./index.css";
import Html from '@/app/components/lib/html';
import clsx from 'clsx';

export type CommentProps = {
  className?: string;
  ref?: Ref<HTMLDivElement>;
  children?: string;
};

export default function Comment(props: CommentProps) {
  const {children, className = '', ref} = props;

  return (
      <Html className={clsx(`comment ${className}`)} ref={ref}>
        {children}
      </Html>
  );
}