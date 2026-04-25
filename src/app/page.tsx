"use client";
import Nav from '@/components/ui/nav';
import Hero from '@/components/ui/hero';
import Profile from '@/components/ui/profile';
import Expertise from '@/components/lib/expertise';
import Collaborate from '@/components/lib/collaborate';
import Container from '@/components/lib/container';
import {Relatable, RelatedOverlay} from '@/components/lib/related';

export default function LandingPage() {
  return (
      <>
        <div className="relative w-full h-full grid">
            <div className="col-start-1 row-start-1">
              <Nav/>
              <Hero/>
              <Profile/>
              <Expertise/>
              <Collaborate/>
              <Container className="flex gap-2 justify-between">
                <Relatable id="a"
                           to="b"
                           className="w-50 aspect-square border-2"/>
                <Relatable id="b"
                           className="w-50 aspect-square border-2"/>
              </Container>
            </div>
            <RelatedOverlay className="col-start-1 row-start-1 h-full top-0"/>
        </div>
      </>
  );
}
