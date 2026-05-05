"use client";
import Nav from '@/components/ui/nav';
import Hero from '@/components/ui/hero';
import Profile from '@/components/ui/profile';
import Expertise from '@/components/lib/experience';
import menu from '@/content/menu';
import hero from '@/content/hero';
import {profile} from '@/content/profile';
import {experience} from '@/content/experience';
import Collaborate from '@/components/lib/collaborate';
import {collaborate} from '@/content/collaborate';

export default function LandingPage() {
  return (
      <>
          <Nav data={menu}/>
          <Hero data={hero}/>
          <Profile data={profile}/>
          <Expertise data={experience}/>
          <Collaborate data={collaborate}/>
      </>
  );
}
