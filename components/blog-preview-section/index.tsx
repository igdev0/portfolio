import Section from '@/components/section';
import {BlogSectionType} from '@/content/types';

export default function BlogPreviewSection(props: BlogSectionType) {
  return (
      <Section title={props.title} comment={props.comment} statement={props.statement}>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {/*{*/}
          {/*  props.previews.map(preview => (*/}
          {/*      <BlogPreview image={getMediaUrl(preview)} title={} description={} slug={preview.slug}/>*/}
          {/*  ))*/}
          {/*}*/}
        </div>
      </Section>
  );
}