import hero from '@/config/content/hero';
import LinkButton from '@/components/ui/link-button';
import clsx from 'clsx';
import Statement from '@/components/ui/statement';

export default function Hero() {
  return (
      <header className={clsx('h-[800]  flex flex-col ')}>
        <div className="max-w-275 mx-auto gap-4 w-full px-9 mt-60">
          <div dangerouslySetInnerHTML={{__html: hero.tag.html}}/>
          <h1 className="text-5xl font-bold">{hero.title.text}</h1>
          <Statement>
            {hero.statement.text}
          </Statement>
          <LinkButton href="#about">
            {hero.cta.first.text}
          </LinkButton>
        </div>
      </header>
  );
}