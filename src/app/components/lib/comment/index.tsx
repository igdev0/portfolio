import {PropsWithChildren} from 'react';
import "./index.css";
import Box from '@/app/components/lib/box';

export default function Comment(props: PropsWithChildren) {
  return (
      <Box as="span" className="comment">
        {props.children}
      </Box>
  )
}