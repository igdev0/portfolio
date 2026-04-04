"use client";
import Menu from '@/components/ui/menu';
import {useScroll} from "motion/react";

export default function LandingPage() {
  const {scrollYProgress} = useScroll();

  return (
      <div className="max-w-275 mx-auto">
        <Menu/>
      </div>
  );
}
