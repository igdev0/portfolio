import Nav from '@/components/ui/nav';
import Hero from '@/components/ui/hero';
import Skills from '@/components/ui/skills';
import Expertise from '@/components/lib/experience';
import nav from '@/content/nav';
import hero from '@/content/hero';
import {experience} from '@/content/experience';
import Footer from '@/components/lib/footer';
import {collaborate, contact} from '@/content/collaborate';
import Collaborate from '@/components/lib/collaborate';
import {stack} from '@/content/stack';
import Passions from '@/components/ui/passions';
import {passions} from '@/content/passions';


export default function LandingPage() {
  return (
      <>
        <Nav {...nav} github={contact.github}/>
        <Hero {...hero}/>
        <Passions {...passions}/>
        <Expertise {...experience}/>
        <Skills {...stack}/>
        <Collaborate {...collaborate}/>
        <Footer/>
      </>
  );
};
