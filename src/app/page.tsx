"use client";
import Menu from '@/components/ui/menu';
import {useScroll} from "motion/react";

export default function LandingPage() {
  const {scrollYProgress} = useScroll();

  return (
      <div>
        <Menu/>
        <div style={{width: "100%", height: "5000px"}}/>
      </div>
  );
}
