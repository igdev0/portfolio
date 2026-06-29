import {HeroType} from '@/content/types';
import contact from '@/content/contact';

const hero: HeroType = {
  comment: "Ianos G Dorultan",
  title: "Frontend Engineer",
  statement: "Product-focused software engineer turning ideas into fast, scalable, and polished applications.",
  cta0: {
    icon: "chat",
    href: "#message",
    text: "Let's talk"
  },
  cta1: {
    icon: "calendar",
    href: contact.calendly,
    text: "Book a call"
  },
  image: {
    src: "/images/me.png",
    width: 550,
    height: 550,
    alt: "Me"
  },
} as const;

export default hero;