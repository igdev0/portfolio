import {PropsWithChildren} from 'react';

interface TitleProps extends PropsWithChildren {
  size?: "";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function Title(props: TitleProps) {
  return (
      <h1 className="text-3xl">{props.children}</h1>
  );
}