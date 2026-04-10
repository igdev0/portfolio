import {BoxProps} from '@/app/components/lib/box/types';
import {PropsWithChildren} from 'react';


export default function Html(props: Omit<BoxProps, "as"> & PropsWithChildren) {
  const {children, className} = props;
  if(typeof children !== "string") {
    throw new Error("Expected string as children, instead got JSX Element ");
  }
  return (
      <div className={className} dangerouslySetInnerHTML={{__html: children as string}}/>
  );
}