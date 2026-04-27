"use client";
import Nav from '@/components/ui/nav';
import Hero from '@/components/ui/hero';
import Profile from '@/components/ui/profile';
import Expertise from '@/components/lib/expertise';
import TechStackV2 from '@/components/lib/tech-stack-v2';
import {stack} from '@/components/lib/tech-stack-v2/const';

export default function LandingPage() {
  return (
      <>
          <Nav/>
          <Hero/>
          <Profile/>
          <Expertise/>
          <TechStackV2 data={stack}/>
      </>
  );
}
