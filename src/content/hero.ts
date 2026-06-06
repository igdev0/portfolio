import {contact} from '@/content/collaborate';
import {HeroType} from '@/content/types';

const hero: HeroType = {
  comment: "Ianos G Dorultan",
  title: "Software Engineer",
  statement: "Frontend-focused engineer passionate about building modern user experiences.",
  cta0: {
    icon: "chat",
    href: "#about-me",
    text: "Let's talk"
  },
  cta1: {
    icon: "chat",
    href: contact.social.calendar.href,
    text: "Book a call"
  },
  image: {
    src: "/images/me.webp",
    width: 383,
    height: 383,
    alt: "Me"
  },
} as const;

export default hero;