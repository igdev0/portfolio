import {PropsWithChildren} from 'react';
import "./index.css";
import Root from '@/app/components/lib/box';
import {BoxProps} from '@/app/components/lib/box/types';

export type CommentProps = BoxProps & PropsWithChildren;

export default function Comment(props: CommentProps) {
  const {children, className = ''} = props;

  return (
      <Root as={props.as} className={`comment ${className}`}>
        {children}
      </Root>
  );
}