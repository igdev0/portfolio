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
import BlogPreviewSection from '@/components/blog-preview-section';
import {blog} from '@/content/blog';
import {getPayload} from 'payload';
import payloadConfig from '@payload-config';

export default async function LandingPage() {
  const payload = await getPayload({config: payloadConfig});
  const blogs = await payload.find({
    collection: "blogs",
    select: {
      preview: true,
      slug: true,
      updatedAt: true
    },
    limit: 3
  });

  return (
      <main>
        <Nav {...nav}/>
        <Hero {...hero}/>
        <Passions {...passions}/>
        <Expertise {...experience}/>
        <Skills {...stack}/>
        <BlogPreviewSection blogs={blogs as keyof object} {...blog}/>
        <Collaborate {...collaborate}/>
        <Footer/>
      </main>
  );
};
