import Nav from '@/components/nav';
import Hero from '@/components/hero';
import Skills from '@/components/skills';
import Expertise from '@/components/experience';
import nav from '@/content/nav';
import hero from '@/content/hero';
import {experience} from '@/content/experience';
import Footer from '@/components/footer';
import {collaborate, contact} from '@/content/collaborate';
import Collaborate from '@/components/collaborate';
import {stack} from '@/content/stack';
import Passions from '@/components/passions';
import {passions} from '@/content/passions';


export default function LandingPage() {
  return (
      <main>
        <Nav {...nav} github={contact.github}/>
        <Hero {...hero}/>
        <Passions {...passions}/>
        <Expertise {...experience}/>
        <Skills {...stack}/>
        <Collaborate {...collaborate}/>
        <Footer/>
      </main>
  );
};
