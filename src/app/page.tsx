"use client";
import Nav from '@/components/ui/nav';
import Hero from '@/components/ui/hero';
import Profile from '@/components/ui/profile';
import Expertise from '@/components/lib/expertise';
import Collaborate from '@/components/lib/collaborate';
import Container from '@/components/lib/container';

export default function LandingPage() {
  return (
      <div>
        <Nav/>
        <Hero/>
        <Profile/>
        <Expertise/>
        <Collaborate/>
        <Container className="flex gap-2 justify-between">
          <div className="w-50 aspect-square border-2">

          </div>
          <div className="w-50 aspect-square border-2">

          </div>
        </Container>
      </div>
  );
}
