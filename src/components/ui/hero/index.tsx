"use client";
import LinkButton from '@/components/lib/link-button';
import clsx from 'clsx';
import Statement from '@/components/lib/statement';
import {Image} from 'next/dist/client/image-component';
import "./index.css";
import Container from '@/components/lib/container';
import Box from '@/components/lib/box';
import Comment from '@/components/lib/comment';
import {HeroType} from '@/content/types';

const corners = clsx(`absolute h-1/9 w-1/9 m-4 border-r-12 border-b-12 border-(--surface-1)`);

export default function Hero(props: HeroType) {
  const {cta0, cta1, image, comment, title, statement} = props;
  return (
      <Box className="hero" as="header" id="top">
        <Container className="hero__layout">
          <Box className="hero__column">
            <Comment className="comment mb-3">
              {comment}
            </Comment>
            <h1
                className="text-5xl mb-6 font-bold">{title}
            </h1>
            <Statement className="mb-6 max-w-96">
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
          <Box
              className="hero__column hero__column--image">
            <Image draggable={false}
                   src={image.src}
                   loading="eager"
                   width={354}
                   height={393}
                   alt={image.alt}/>
            <Box className="bg-(--bg-surface) w-3/5 h-3/5 absolute -z-1 top-0 left-0 right-0 bottom-0 m-auto"/>
            <Box className={clsx(corners, 'rotate-180 top-3 left-0')}/>
            <Box
                className={clsx(corners, 'rotate-90 left-0 bottom-0')}/>
            <Box className={clsx(corners, 'right-0 bottom-0')}/>
            <Box className={clsx(corners, '-rotate-90 right-0 top-3')}/>
          </Box>
        </Container>
      </Box>
  );
}