import {getLocalPayload} from '@/utils';
import {Calendar} from 'lucide-react';
import Tag from '@/components/tag';
import Heading from '@/components/heading';
import Container from '@/components/container';
import Nav from '@/components/nav';
import nav from '@/content/nav';
import Footer from '@/components/footer';

const payload = await getLocalPayload();

export default async function BlogPage(props: { params: Promise<{ slug: string }> }) {
  const {params} = props;
  const {slug} = await params;

  const {docs} = await payload.find({
    collection: "blogs",
    where: {
      slug: {
        equals: slug
      },
    },
    limit: 1,
  });
  const blog = docs[0];
  return (
      <main>
        <Nav {...nav}/>
        <Container>
          <Heading as="h1" className="py-6">{blog.title}</Heading>
          <div className="flex-group">
            <Tag>
              <Calendar/>
              {blog.createdAt}
            </Tag>
            <Tag>
              <Calendar/>
              {blog.updatedAt}
            </Tag>
          </div>
        </Container>
        <Footer/>
      </main>
  );
}