"use client";
import Nav from '@/components/ui/nav';
import Hero from '@/components/ui/hero';
import Profile from '@/components/ui/profile';
import Expertise from '@/components/lib/experience';
import nav from '@/content/nav';
import hero from '@/content/hero';
import {profile} from '@/content/profile';
import {experience} from '@/content/experience';
import Collaborate from '@/components/lib/collaborate';
import {collaborate} from '@/content/collaborate';
import Footer from '@/components/lib/footer';

export default function LandingPage() {
  return (
      <>
        <Nav data={nav}/>
        <Hero data={hero}/>
        <Profile data={profile}/>
        <Expertise data={experience}/>
        <Collaborate data={collaborate}/>
        <Footer/>
      </>
  );
}
