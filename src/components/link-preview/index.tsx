import {PropsWithChildren} from 'react';
import Image from 'next/image';

export default function LinkPreview(props: PropsWithChildren) {
  return (
      <div>
        <Image src="" alt=""/>
        {props.children}
      </div>
  )
}