import Section from '@/components/section';
import {SectionType} from '@/content/types';
import BlogPreview from '@/components/blog-preview';
import {PaginatedDocs} from 'payload';
import {Blog} from '@/payload-types';

export default function BlogPreviewSection(props: SectionType & { blogs: PaginatedDocs<Blog> }) {

  return (
      <Section title={props.title} comment={props.comment} statement={props.statement}>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {
            props.blogs.docs.map((blog, index) => (
                <BlogPreview key={index}
                             {...blog}/>
            ))
          }
        </div>
      </Section>
  );
}