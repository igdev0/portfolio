import {PropsWithChildren} from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: "Contact IGDev",
  description: "A page containing a basic form for messaging Ianos Dorultan."
}

export default function Layout(props: PropsWithChildren) {
  return (
      <>
        {props.children}
      </>
  )
}