import type {Metadata} from 'next';
import {PropsWithChildren} from 'react';

export const metadata: Metadata = {
  title: "IGDev's projects",
  description: "This page contains a list of projects developed by Ianos Dorultan",
};

export default function Layout(props: PropsWithChildren) {
  return (
      <>{props.children}</>
  )
}