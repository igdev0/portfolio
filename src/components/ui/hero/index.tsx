"use client";
import {AnimatedLinkButton} from '@/components/lib/link-button';
import clsx from 'clsx';
import Statement from '@/components/lib/statement';
import Image from 'next/image';
import "./index.css";
import Container from '@/components/lib/container';
import Box from '@/components/lib/box';
import {AnimatedComment} from '@/components/lib/comment';
import {HeroType} from '@/content/types';
import Heading from '@/components/lib/heading';
import {motion, useDragControls, useMotionValue, useSpring, useTransform} from 'framer-motion';
import {PointerEventHandler} from 'react';

const corners = clsx(`absolute h-1/9 w-1/9 m-4 border-r-12 border-b-12 border-(--surface-1)`);

const AnimatedImage = motion(Image);

export default function Hero(props: HeroType) {
  const {cta0, cta1, image, comment, title, statement} = props;
  const controls = useDragControls();

  const z = useMotionValue(1);
  const scaleZ = useSpring(z);

  const xy = useTransform(scaleZ, [1, 1.2], [1, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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


  return (
      <Box className="hero" as="header" id="top">
        <Container className="hero-layout">
          <Box className="hero-content">
            <AnimatedComment className="mb-3"
                             viewport={{once: true}}
                             whileInView={{opacity: 1, y: 0}}
                             initial={{opacity: 0, y: 0}}
                             transition={{delay: .6}}>
              {comment}
            </AnimatedComment>
            <Heading
                as="h1"
                transition={{delay: 1.2}}
                className="text-5xl mb-6 font-bold">{title}</Heading>
            <Statement className="mb-6 max-w-96"
                       transition={{delay: 1.3}}>
              {statement}
            </Statement>
            <Box className="flex gap-4">
              <AnimatedLinkButton
                  initial={{opacity: 0, y: 20}}
                  transition={{delay: 1.4}}
                  viewport={{once: true}}
                  whileInView={{opacity: 1, y: 0}}
                  variant="secondary" href={cta0.href} icon={cta0.icon}>
                {cta0.text}
              </AnimatedLinkButton>
              <AnimatedLinkButton
                  initial={{opacity: 0, y: 20}}
                  transition={{delay: 1.5}}
                  viewport={{once: true}}
                  whileInView={{opacity: 1, y: 0}}
                  variant="solid" href={cta1.href} external icon={cta1.icon}>
                {cta1.text}
              </AnimatedLinkButton>
            </Box>
          </Box>
          <motion.div
              drag
              dragConstraints={{top: 5, left: 5, right: 5, bottom: 5}}
              className="hero-image"
              onPointerDown={handlePointerDown}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}>
            <AnimatedImage draggable={false}
                           src={image.src}
                           loading="lazy"
                           whileInView={{opacity: 1}}
                           initial={{opacity: 0}}
                           transition={{delay: .3}}
                           viewport={{once: true}}
                           width={354}
                           height={393}
                           alt={image.alt}/>
            <motion.div
                initial={{opacity: 0, scale: .5}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{delay: .6}}
                viewport={{once: true}}
                style={{scale: scaleZ}}
                className="bg-(--surface-1) w-3/5 h-3/5 absolute -z-1 top-0 left-0 right-0 bottom-0 m-auto"/>

            <motion.div
                style={{x: xy, y: xy}}
                initial={{opacity: 0}}
                viewport={{once: true}}
                whileInView={{opacity: 1}}
                transition={{delay: .9}}
                className={clsx(corners, 'rotate-180 top-3 left-0')}/>
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
                className={clsx(corners, '-rotate-90 right-0 top-3')}/>
          </motion.div>
        </Container>
      </Box>
  );
}