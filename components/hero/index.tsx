import LinkButton from '@/components/link-button';
import Statement from '@/components/statement';
import Container from '@/components/container';
import Comment from '@/components/comment';
import {HeroType} from '@/content/types';
import Heading from '@/components/heading';
import "./index.css";
import HeroImage from '@/components/hero/image';


export default function Hero(props: HeroType) {
  const {cta0, cta1, image, comment, title, statement} = props;

  return (
      <header className="hero" id="top">
        <Container className="hero-layout">
          <div className="hero-content">
            <Comment> 
              {comment}
            </Comment>
            <Heading
                as="h1"
                className="text-5xl 6xl:text-6xl mb-6 font-bold">{title}</Heading>
            <Statement className="mb-6 max-w-96">
              {statement}
            </Statement>
            <div className="flex gap-4">
              <LinkButton variant="secondary" href={cta0.href} icon={cta0.icon}>
                {cta0.text}
              </LinkButton>
              <LinkButton variant="solid" href={cta1.href} external icon={cta1.icon}>
                {cta1.text}
              </LinkButton>
            </div>
          </div>
          <HeroImage {...image}/>
        </Container>
      </header>
  );
}