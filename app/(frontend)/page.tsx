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
import {getLocalPayload, getMediaUrl} from '@/utils';
import BlogPreviewSection from '@/components/blog-preview-section';
import {blog} from '@/content/blog';
import {Media, Preview} from '@/payload-types';
import {BlogPreviewType} from '@/content/types';

const payload = await getLocalPayload();
export default async function LandingPage() {
  const result = await payload.find({
    collection: 'blogs',
    limit: 3,
  });

  console.log(result);
  return (
      <main>
        <Nav {...nav}/>
        <Hero {...hero}/>
        <Passions {...passions}/>
        <Expertise {...experience}/>
        <Skills {...stack}/>
        <BlogPreviewSection previews={result.docs.map((blog) => ({
          slug: blog.slug,
          description: blog.preview?.description as string,
          image: {
            src: getMediaUrl((blog.preview as Preview)),
            height: (blog.preview?.image as Media).height as number,
            width: (blog.preview?.image as Media).width as number,
            alt: (blog.preview?.image as Media).alt as string,
          },
          title: blog.title as string,
        } as BlogPreviewType
        ))} {...blog}/>
        {/*<Section title="{Blogs}" comment="// My blogs" statement="I post weekly.">*/}
        {/*  /!*{*!/*/}
        {/*  /!*  result.docs.map((blog) => {*!/*/}
        {/*  /!*    return (*!/*/}
        {/*  /!*        <BlogPreview*!/*/}
        {/*  /!*            key={blog.id}*!/*/}
        {/*  /!*            slug={blog.slug as string}*!/*/}
        {/*  /!*            title={blog.preview?.title??""}*!/*/}
        {/*  /!*            description={blog.preview?.description??""}*!/*/}
        {/*  /!*            media={blog.preview?.image as Media}/>)*!/*/}
        {/*  /!*  })*!/*/}
        {/*  /!*}*!/*/}
        {/*</Section>*/}
        <Collaborate {...collaborate}/>
        <Footer/>
      </main>
  );
};
