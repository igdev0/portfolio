"use client";
import {HeroType} from '@/content/types';
import Image from 'next/image';
import {motion, useDragControls, useMotionValue, useSpring, useTransform} from 'framer-motion';
import {MouseEvent, PointerEventHandler} from 'react';
import clsx from 'clsx';

const AnimatedImage = motion.create(Image);

export default function HeroImage(props: HeroType['image']) {
  const controls = useDragControls();

  const z = useMotionValue(1);
  const scaleZ = useSpring(z);

  const xy = useTransform(scaleZ, [1, 1.2], [1, 10]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = (e.clientX - rect.left) - centerX;
    const deltaY = (e.clientY - rect.top) - centerY;

    const distance = Math.abs(deltaX) + Math.abs(deltaY);
    const maxDistance = centerX + centerY;

    const normalized = 1 - distance / maxDistance;

    z.set(1 + normalized * 0.2);
  };

  const handleMouseLeave = () => {
    z.set(1);
  };

  const handlePointerDown: PointerEventHandler = (e) => {
    controls.start(e);
  };
  const corners = clsx(`absolute h-12 w-12 m-4 border-r-12 border-b-12 border-(--surface-1)`);

  return (

      <motion.div
          drag
          dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
          className="hero-image"
          whileDrag={{cursor: "grabbing"}}
          onPointerDown={handlePointerDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}>
        <AnimatedImage loading="eager"
                       whileInView={{opacity: 1}}
                       initial={{opacity: 0}}
                       transition={{delay: .3}}
                       fetchPriority="high"
                       draggable={false}
                       viewport={{once: true}}
                       {...props}/>
        <motion.div
            className="square"
            initial={{opacity: 0, scale: .5}}
            whileInView={{opacity: 1, scale: 1}}

            transition={{delay: .6}}
            viewport={{once: true}}
            style={{scale: scaleZ}}/>

        <motion.div
            style={{x: xy, y: xy}}
            initial={{opacity: 0}}
            viewport={{once: true}}
            whileInView={{opacity: 1}}
            transition={{delay: .9}}
            className={clsx(corners, 'rotate-180 top-0 left-0')}/>
        <motion.div
            style={{x: xy, y: xy}}
            initial={{opacity: 0}}
            viewport={{once: true}}
            whileInView={{opacity: 1}}
            transition={{delay: .9}}
            className={clsx(corners, 'rotate-90 left-0 bottom-0')}/>
        <motion.div
            style={{x: xy, y: xy}}
            initial={{opacity: 0}}
            viewport={{once: true}}
            whileInView={{opacity: 1}}
            transition={{delay: .9}}
            className={clsx(corners, 'right-0 bottom-0')}/>
        <motion.div
            style={{x: xy, y: xy}}
            initial={{opacity: 0}}
            viewport={{once: true}}
            whileInView={{opacity: 1}}
            transition={{delay: .9}}
            className={clsx(corners, '-rotate-90 right-0 top-0')}/>
      </motion.div>
  );
}