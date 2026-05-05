import "./index.css";
import {PropsWithChildren} from 'react';
import {cva, VariantProps} from 'class-variance-authority';
import clsx from 'clsx';

const tagVariants =  cva("tag", {
  variants: {}
});

interface TagProps extends PropsWithChildren, VariantProps<typeof tagVariants> {
  className?: string;
}

 export default function Tag(props: TagProps) {
  return (
      <div className={clsx('tag', props.className)}>
        {props.children}
      </div>
  )
 }