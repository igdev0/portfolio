import Image from 'next/image';
import "./index.css";
import Link from 'next/dist/client/link';
import {BlogPreviewType} from '@/content/types';

export default function BlogPreview(props: BlogPreviewType) {

  return (
      <div className="blog-preview">
        <div className="preview-media">
          <Image src={props.image.src}
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