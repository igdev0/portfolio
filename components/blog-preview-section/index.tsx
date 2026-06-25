import Section from '@/components/section';
import {SectionType} from '@/content/types';
import {Blog} from '@/remote/client/gql-generated';
import BlogPreview from '@/components/blog-preview';


export default function BlogPreviewSection(props: SectionType & { blogs: Blog[] }) {

  return (
      <Section title={props.title} comment={props.comment} statement={props.statement}>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {
            props.blogs.map((blog, index) => (
                <BlogPreview key={index}
                             slug={blog.slug as string}
                             {...blog.preview}/>
            ))
          }
        </div>
      </Section>
  );
}