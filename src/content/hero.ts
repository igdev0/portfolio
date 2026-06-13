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
    icon: "calendar",
    href: contact.calendly,
    text: "Book a call"
  },
  image: {
    src: "/images/me.webp",
    width: 500,
    height: 500,
    alt: "Me"
  },
} as const;

export default hero;