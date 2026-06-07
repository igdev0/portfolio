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
const AnimatedHtml = motion(Html);
export default function Comment(props: CommentProps) {
  const {children, className = '', ref} = props;

  return (
      <AnimatedHtml className={clsx(`comment ${className}`)} ref={ref} whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: 10}} viewport={{once: true}}>
        {children}
      </AnimatedHtml>
  );
}