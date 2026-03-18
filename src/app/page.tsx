"use client";
import Hero from '@/components/ui/hero';
import Container from '@/components/ui/container';
import Background from '@/components/ui/background';
import Menu from '@/components/ui/menu';
import {useScroll} from "motion/react";

export default function LandingPage() {
  const {scrollYProgress} = useScroll();

  return (
      <Container>
        <Background/>
        <Menu/>
        <Hero/>
        <div className="sticky top-10 max-w-[900] mx-auto">
          <h2 className="text-7xl text-white text-center">Experience</h2>
          <div className="work mt-10 bg-gray-900 overflow-hidden rounded-lg shadow-2xl flex items-center justify-between">
            <div className="p-4">
              <h3 className="text-white text-2xl">FinerVision – Full-Stack Developer</h3>
              <ul className="text-white">
                <li className="my-2"> - Managed web and native projects for brands like Sainsbury's and HSBC</li>
                <li className="my-2"> - Developed responsive web and mobile</li>
                <li className="my-2"> - Updated legacy projects and crafted reusable React UI Components</li>
                <li className="my-2"> - Automated content integration using Google APIs</li>
                <li className="my-2"> - Collaborated in an agile/kanban</li>
              </ul>
            </div>
            <div className="flex-1 h-full">
            </div>
          </div>
        </div>
        <div className="h-[1000] w-full"/>
      </Container>
  );
}
