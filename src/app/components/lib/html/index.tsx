import {PropsWithChildren} from 'react';
import Box from '@/app/components/lib/box';


export default function Html(props: PropsWithChildren & { className?: string }) {
  const {children, className} = props;
  if (typeof children !== "string") {
    throw new Error("Expected string as children, instead got JSX Element ");
  }
  return (
      <Box as="div" className={className} dangerouslySetInnerHTML={{__html: children as string}}/>
  );
}