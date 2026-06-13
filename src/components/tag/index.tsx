import "./index.css";
import {PropsWithChildren} from 'react';
import clsx from 'clsx';

interface TagProps extends PropsWithChildren {
  className?: string;
}

 export default function Tag(props: TagProps) {
  return (
      <div className={clsx('tag', props.className)}>
        {props.children}
      </div>
  )
 }