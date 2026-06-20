"use client";

import {motion, useScroll} from 'motion/react';

export default function NavProgress() {
  const {scrollYProgress: scaleX} = useScroll();
  return (
      <motion.div className="w-full h-1 bg-accent-500 origin-left fixed top-0 left-0 right-0 z-10"
                  style={{scaleX}}/>
  )
}