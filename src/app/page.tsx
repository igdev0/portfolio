"use client";
import Nav from '@/components/ui/nav';
import Hero from '@/components/ui/hero';
import Profile from '@/components/ui/profile';
import Expertise from '@/components/lib/expertise';

export default function LandingPage() {
  return (
      <>
          <Nav/>
          <Hero/>
          <Profile/>
          <Expertise/>
      </>
  );
}
