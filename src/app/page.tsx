import Nav from '@/components/ui/nav';
import Hero from '@/components/ui/hero';
import Profile from '@/components/ui/profile';
import Expertise from '@/components/lib/experience';
import nav from '@/content/nav';
import hero from '@/content/hero';
import {profile} from '@/content/profile';
import {experience} from '@/content/experience';
import Footer from '@/components/lib/footer';
import {collaborate, contact} from '@/content/collaborate';
import Collaborate from '@/components/lib/collaborate';


export default function LandingPage() {
  return (
      <>
        <Nav {...nav} github={contact.github}/>
        <Hero {...hero}/>
        <Profile {...profile}/>
        <Expertise {...experience}/>
        <Collaborate {...collaborate}/>
        <Footer/>
      </>
  );
};
