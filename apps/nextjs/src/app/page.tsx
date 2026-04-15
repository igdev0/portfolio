"use client";
import {Fragment} from 'react';
import Nav from '@/app/components/ui/nav';
import Hero from '@/app/components/ui/hero';
import Profile from '@/app/components/ui/profile';
import Expertise from '@/app/components/lib/expertise';
import Collaborate from '@/app/components/lib/collaborate';

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
