import hero from '@/config/content/hero';
import LinkButton from '@/components/ui/link-button';
import clsx from 'clsx';
import Statement from '@/components/ui/statement';
import {Image} from 'next/dist/client/image-component';

const corners = clsx(`h-10 w-10 m-4 border-r-12 border-b-12 border-indigo-100`);
export default function Hero() {
  return (
      <header className={clsx('h-[800] flex flex-col')}>
        <div
            className="max-w-275 border-x border-(--grid) mx-auto gap-4 w-full px-9 pt-30 grid sm:grid-cols-2 items-center sm:justify-between">
          <div className="sm:order-1">
            <div className="mb-2" dangerouslySetInnerHTML={{__html: hero.tag.html}}/>
            <h1 className="text-5xl font-bold mb-6">{hero.title.text}</h1>
            <Statement className="mb-6">
              <span dangerouslySetInnerHTML={{__html: hero.statement.text}}/>
            </Statement>
            <div className="flex gap-4">
              <LinkButton href="#about">
                {hero.cta.first.text}
              </LinkButton>
              <LinkButton variant="primary" href="#about">
                {hero.cta.second.text}
              </LinkButton>
            </div>
          </div>
          <div
              className="flex items-center self-end sm:w-full justify-normal w-max sm:justify-end -translate-y-10 sm:order-2 relative sm:max-w-[400] ml-auto md:mr-17 z-0">

            <Image draggable={false} src={hero.card.image.src} width={354} height={393}
                   alt={hero.card.image.alt}/>
            <div className="bg-indigo-100 w-60 h-60 absolute -z-1 top-0 left-0 right-0 bottom-0 m-auto"/>
            <div className={clsx(corners, 'rotate-180 absolute top-3 left-0')}/>
            <div
                className={clsx(corners, 'rotate-90 absolute left-0 bottom-0')}/>
            <div className={clsx(corners, 'absolute right-0 bottom-0')}/>
            <div className={clsx(corners, '-rotate-90 absolute right-0 top-3')}/>
          </div>
        </div>
      </header>
  );
}