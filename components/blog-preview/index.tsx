import Image from 'next/image';
import "./index.css";
import Link from 'next/dist/client/link';
import {Blog, Media} from '@/payload-types';

export default function BlogPreview(props: Blog) {
  return (
      <Link href={`/blog/${props.slug}`} className="blog-preview">
        <div className="flex flex-wrap gap-1">

        </div>
        <div className="preview-media">
          {
              props.preview?.image && (
                  <Image src={`${process.env.NEXT_PUBLIC_MEDIA_STORAGE_URL}/${(props.preview?.image as Media)?.filename}`}
                         alt={(props.preview.image as Media)?.alt ?? "Blog image preview"} width={400} height={200}/>
              )
          }
        </div>
        <div className="preview-content">
          <h3 className="text-xl font-medium">{props.title}</h3>
          <p>{props.preview?.description}</p>
        </div>
      </Link>
  );
}