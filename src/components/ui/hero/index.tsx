"use client";
import LinkButton from '@/components/lib/link-button';
import clsx from 'clsx';
import Statement from '@/components/lib/statement';
import Image from 'next/image';
import "./index.css";
import Container from '@/components/lib/container';
import Box from '@/components/lib/box';
import Comment from '@/components/lib/comment';
import {HeroType} from '@/content/types';
import Heading from '@/components/lib/heading';
import {motion, useMotionValue, useSpring, useTransform} from 'framer-motion';

const corners = clsx(`absolute h-1/9 w-1/9 m-4 border-r-12 border-b-12 border-(--surface-1)`);

const AnimatedImage = motion(Image);

export default function Hero(props: HeroType) {
  const {cta0, cta1, image, comment, title, statement} = props;

  const z = useMotionValue(1);
  const scaleZ = useSpring(z);

  const xy = useTransform(scaleZ, [1, 1.2], [1, 25])

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


  return (
      <Box className="hero" as="header" id="top">
        <Container className="hero-layout">
          <Box className="hero-content">
            <Comment className="comment mb-3">
              {comment}
            </Comment>
            <Heading
                as="h1"
                transition={{delay: .3}}
                className="text-5xl mb-6 font-bold">{title}</Heading>
            <Statement className="mb-6 max-w-96"
                       transition={{delay: .4}}>
              {statement}
            </Statement>
            <Box className="flex gap-4">
              <LinkButton variant="secondary" href={cta0.href} icon={cta0.icon}>
                {cta0.text}
              </LinkButton>
              <LinkButton variant="solid" href={cta1.href} external icon={cta1.icon}>
                {cta1.text}
              </LinkButton>
            </Box>
          </Box>
          <div
              className="hero-image"
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
                style={{scale: scaleZ}}
                className="bg-(--surface-1) w-3/5 h-3/5 absolute -z-1 top-0 left-0 right-0 bottom-0 m-auto"/>

            <motion.div
                style={{x: xy, y: xy}}
                className={clsx(corners, 'rotate-180 top-3 left-0')}/>
            <motion.div
                style={{x: xy, y: xy}}
                className={clsx(corners, 'rotate-90 left-0 bottom-0')}/>
            <motion.div
                style={{x: xy, y: xy}}
                className={clsx(corners, 'right-0 bottom-0')}/>
            <motion.div
                style={{x: xy, y: xy}}
                className={clsx(corners, '-rotate-90 right-0 top-3')}/>
          </div>
        </Container>
      </Box>
  );
}