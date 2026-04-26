"use client";
import Nav from '@/components/ui/nav';
import Hero from '@/components/ui/hero';
import Profile from '@/components/ui/profile';
import Expertise from '@/components/lib/expertise';
import Collaborate from '@/components/lib/collaborate';
import Container from '@/components/lib/container';
import {Relatable} from '@/components/lib/related';

export default function LandingPage() {
  return (
      <>
        <div className="col-start-1 row-start-1">
          <Nav/>
          <Hero/>
          <Profile/>
          <Expertise/>
          <Collaborate/>
          <Container className="flex flex-wrap gap-2 justify-between">
            <Relatable id="a"
                       asChild={true}
                       to="b"
                       className="w-50 aspect-square border-2 -translate-y-40">
            </Relatable>
            <Relatable id="b"
                       className="w-50 aspect-square border-2"/>
          </Container>
        </div>
      </>
  );
}
