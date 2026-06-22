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
import {query} from '@/app/ApoloClient';
import gql from 'graphql-tag';

const GET_BLOGS = gql`
    query getBlogs($limit: Int = 3) {
        Blogs(limit: $limit) {
            docs {
                category {
                    title
                },
                title,
            },
            limit
        }
    }
`;

export default async function LandingPage() {
  const {data} = await query({
    query: GET_BLOGS,
    variables: {
      limit: 3
    }
  });


  return (
      <main>
        <Nav {...nav}/>
        <Hero {...hero}/>
        <Passions {...passions}/>
        <Expertise {...experience}/>
        <Skills {...stack}/>
        <BlogPreviewSection previews={[]} {...blog}/>
        <Collaborate {...collaborate}/>
        <Footer/>
      </main>
  );
};
