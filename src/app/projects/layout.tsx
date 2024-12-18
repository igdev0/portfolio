import type {Metadata} from 'next';
import {PropsWithChildren} from 'react';

export const metadata: Metadata = {
  title: "Dorultan Ianos | Projects",
  description: "...[todo]",
};

export default function Layout(props: PropsWithChildren) {
  return (
      <>{props.children}</>
  )
}