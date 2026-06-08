"use client";
import {Ref} from 'react';
import "./index.css";
import Html from '@/components/lib/html';
import clsx from 'clsx';
import {motion} from 'framer-motion';

export type CommentProps = {
  className?: string;
  ref?: Ref<HTMLDivElement>;
  children?: string;
};
export default function Comment(props: CommentProps) {
  const {children, className, ref} = props;

  return (
      <Html className={clsx('comment mb-3', className)} ref={ref}>
        {children??""}
      </Html>
  );
}

export const AnimatedComment = motion(Comment)