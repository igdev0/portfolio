import {PropsWithChildren} from 'react';
import Image from 'next/image';
import {ImgProps} from 'next/dist/shared/lib/get-img-props';

export interface LinkPreviewProps extends PropsWithChildren {
  image: ImgProps;
  title: string;
  description: string;
}

export default function LinkPreview(props: PropsWithChildren) {
  return (
      <div>
        <Image src="" alt=""/>
        {props.children}
      </div>
  );
}