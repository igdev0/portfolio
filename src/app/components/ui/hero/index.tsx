"use client";
import hero from '@/config/content/hero';
import LinkButton from '@/app/components/lib/link-button';
import clsx from 'clsx';
import Statement from '@/app/components/lib/statement';
import {Image} from 'next/dist/client/image-component';
import "./index.css";
import Container from '@/app/components/lib/container';
import Box from '@/app/components/lib/box';
import Comment from '@/app/components/lib/comment';

const corners = clsx(`absolute h-1/9 w-1/9 m-4 border-r-12 border-b-12 border-(--bg-surface)`);

export default function Hero() {

  return (
      <Box className="hero" as="header">
        <Container className="hero__layout">
          <Box className="hero__column">
            <Comment className="comment mb-3">
              {hero.tag.value}
            </Comment>
            <h1
                className="text-5xl mb-6 font-bold">{hero.title.value}
            </h1>
            <Statement className="mb-6 max-w-96">
              {hero.statement.value}
            </Statement>
            <Box className="flex gap-4">
              <LinkButton variant="outline" href="#about">
                {hero.cta.first.text}
              </LinkButton>
              <LinkButton variant="solid" href="#about">
                {hero.cta.second.text}
              </LinkButton>
            </Box>
          </Box>
          <Box
              className="hero__column hero__column--image">
            <Image draggable={false}
                   src={hero.card.image.src}
                   loading="eager"
                   width={354}
                   height={393}
                   alt={hero.card.image.alt}/>
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