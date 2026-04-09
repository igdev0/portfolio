import hero from '@/config/content/hero';
import LinkButton from '@/app/components/lib/link-button';
import clsx from 'clsx';
import Statement from '@/app/components/lib/statement';
import {Image} from 'next/dist/client/image-component';
import "./index.css";
import Container from '@/app/components/lib/container';
import AppText from '@/app/components/lib/text';
import Html from '@/app/components/lib/html';

const corners = clsx(`absolute h-1/9 w-1/9 m-4 border-r-12 border-b-12 border-(--bg-surface)`);

export default function Hero() {
  return (
      <header className="hero">
        <Container className="hero__layout">
          <div className="hero__column">
            <Html className="mb-3 relative">
              {hero.tag.html}
            </Html>
            <AppText size="5xl"
                     weight="bold"
                     className="mb-6">{hero.title.text}
            </AppText>
            <Statement>
              <Html as="p" className="mb-6 text-left max-w-96">
                {hero.statement.text}
              </Html>
            </Statement>
            <div className="flex gap-4">
              <LinkButton variant="outline" href="#about">
                {hero.cta.first.text}
              </LinkButton>
              <LinkButton variant="solid" href="#about">
                {hero.cta.second.text}
              </LinkButton>
            </div>
          </div>
          <div
              className="hero__column hero__column--image">
            <Image draggable={false} src={hero.card.image.src} loading="eager" width={354} height={393}
                   alt={hero.card.image.alt}/>
            <div className="bg-(--bg-surface) w-3/5 h-3/5 absolute -z-1 top-0 left-0 right-0 bottom-0 m-auto"/>
            <div className={clsx(corners, 'rotate-180 top-3 left-0')}/>
            <div
                className={clsx(corners, 'rotate-90 left-0 bottom-0')}/>
            <div className={clsx(corners, 'right-0 bottom-0')}/>
            <div className={clsx(corners, '-rotate-90 right-0 top-3')}/>
          </div>
        </Container>
      </header>
  );
}