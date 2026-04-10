import {ElementType, PropsWithChildren} from 'react';
import "./index.css";
import Box, {BoxProps} from '@/app/components/lib/box';

export type CommentProps<T extends ElementType = 'div'> = BoxProps<T> & PropsWithChildren;

export default function Comment<T extends ElementType = 'div'>(props: CommentProps<T>) {
  const {children, className = '', ...rest} = props;

  return (
      <Box as={props.as} className={`comment ${className}`} {...rest}>
        {children}
      </Box>
  );
}