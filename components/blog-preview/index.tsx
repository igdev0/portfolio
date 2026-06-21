import {Media} from '@/payload-types';
import Image from 'next/image';
import "./index.css";
import Link from 'next/dist/client/link';

export interface BlogPreviewProps {
  title: string;
  description: string;
  slug: string;
  media: Media;
}

export default function BlogPreview(props: BlogPreviewProps) {

  return (
      <div className="blog-preview">
        <div className="preview-media">
          <Image src={`${process.env.NEXT_PUBLIC_MEDIA_STORAGE_URL}/${props.media.filename}`}
                 alt={`props.media.filename`} width={300} height={200}/>
        </div>
        <div className="preview-content">
          <h3 className="text-xl font-medium">{props.title}</h3>
          <p>{props.description}</p>
          <Link href={`/blog/${props.slug}`}>View Blog</Link>
        </div>
      </div>
  );
}