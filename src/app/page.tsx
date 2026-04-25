"use client";
import Nav from '@/components/ui/nav';
import Hero from '@/components/ui/hero';
import Profile from '@/components/ui/profile';
import Expertise from '@/components/lib/expertise';
import Collaborate from '@/components/lib/collaborate';
import Container from '@/components/lib/container';
import {RelatedNode, RelatedOverlay} from '@/components/lib/related';

export default function LandingPage() {
  return (
      <>
        <div>
          <Nav/>
          <Hero/>
          <Profile/>
          <Expertise/>
          <Collaborate/>
          <Container className="flex gap-2 justify-between">
            <RelatedNode id="a" z={1} className="w-50 aspect-square border-2"/>
            <RelatedNode id="b" z={1}  className="w-50 aspect-square border-2"/>
            <RelatedOverlay/>
          </Container>
        </div>
      </>
  );
}
