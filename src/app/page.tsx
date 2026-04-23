"use client";
import Nav from '@/components/ui/nav';
import Hero from '@/components/ui/hero';
import Profile from '@/components/ui/profile';
import Expertise from '@/components/lib/expertise';
import Collaborate from '@/components/lib/collaborate';
import Container from '@/components/lib/container';
import useResizeObserver from '@/hooks/use-resize-observer';
import {useRef, useState} from 'react';

export default function LandingPage() {
  const [addRef] = useResizeObserver();
  const [size, setSize] = useState(0);
  const counter = useRef(0);
  const cb = (props:ResizeObserverEntry) => {
    setSize(props.contentRect.width);
  }
  counter.current+=1;
  console.log(counter.current);
  return (
      <div>
        <Nav/>
        <Hero/>
        <Profile/>
        <Expertise/>
        <Collaborate/>
        <Container ref={addRef(cb)} className="flex gap-2 justify-between">
          <div className="w-50 aspect-square border-2">

          </div>
          <div className="w-50 aspect-square border-2">

          </div>
        </Container>
      </div>
  );
}
