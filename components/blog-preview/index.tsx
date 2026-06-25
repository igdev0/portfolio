import Image from 'next/image';
import "./index.css";
import Link from 'next/dist/client/link';
import {Blog_Preview} from '@/remote/client/gql-generated';

export default function BlogPreview(props: Blog_Preview & {slug: string}) {
  return (
      <Link href={`/blog/${props.slug}`} className="blog-preview">
        <div className="flex flex-wrap gap-1">

        </div>
        <div className="preview-media">
          <Image src={`${process.env.NEXT_PUBLIC_MEDIA_STORAGE_URL}/${props.image?.filename}`}
                 alt={props.image?.alt??"Blog image preview"} width={400} height={200}/>
        </div>
        <div className="preview-content">
          <h3 className="text-xl font-medium">{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </Link>
  );
}