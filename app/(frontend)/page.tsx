import Nav from '@/components/nav';
import Hero from '@/components/hero';
import Skills from '@/components/skills';
import Expertise from '@/components/experience';
import Footer from '@/components/footer';
import Collaborate from '@/components/collaborate';
import Passions from '@/components/passions';
import nav from '@/content/nav';
import hero from '@/content/hero';
import experience from '@/content/experience';
import stack from '@/content/stack';
import passions from '@/content/passions';
import collaborate from '@/content/collaborate';
import {getLocalPayload} from '@/utils';
import Section from '@/components/section';
import BlogPreview from '@/components/blog-preview';
import {Media} from '@/payload-types';

const payload = await getLocalPayload();
export default async function LandingPage() {
  const result = await payload.find({
    collection: 'blogs',
    limit: 3,
  });
  return (
      <main>
        <Nav {...nav}/>
        <Hero {...hero}/>
        <Passions {...passions}/>
        <Expertise {...experience}/>
        <Skills {...stack}/>
        <Section title="{Blogs}" comment="// My blogs" statement="I post weekly.">
          {
            result.docs.map((blog) => {
              return (
                  <BlogPreview
                      key={blog.id}
                      slug={blog.slug as string}
                      title={blog.preview?.title??""}
                      description={blog.preview?.description??""}
                      media={blog.preview?.image as Media}/>)
            })
          }
        </Section>
        <Collaborate {...collaborate}/>
        <Footer/>
      </main>
  );
};
