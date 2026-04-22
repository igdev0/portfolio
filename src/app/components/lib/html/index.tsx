import {PropsWithChildren, Ref} from 'react';


export default function Html(props: PropsWithChildren & { className?: string, ref?: Ref<HTMLDivElement> }) {
  const {children, className, ref} = props;
  if (typeof children !== "string") {
    throw new Error("Expected string as children, instead got JSX Element ");
  }
  return (
      <div ref={ref} className={className} dangerouslySetInnerHTML={{__html: children as string}}/>
  );
}