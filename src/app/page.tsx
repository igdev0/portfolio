"use client";
import {Fragment} from 'react';
import Nav from '@/components/ui/nav';
import Hero from '@/components/ui/hero';
import Profile from '@/components/ui/profile';
import Expertise from '@/components/lib/expertise';
import Collaborate from '@/components/lib/collaborate';

export default function LandingPage() {

  return (
      <Fragment>
        <Nav/>
        <Hero/>
        <Profile/>
        <Expertise/>
        <Collaborate/>
        {/*<div style={{width: "100%", height: "5000px"}}/>*/}
      </Fragment>
  );
}
