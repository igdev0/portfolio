import {contact} from '@/content/collaborate';
import {HeroType} from '@/content/types';

const hero: HeroType = {
  comment: "Ianos G Dorultan",
  title: "Software Engineer",
  statement: "Frontend-focused engineer passionate about building modern user experiences.",
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
    src: "/images/me.webp",
    width: 550,
    height: 550,
    alt: "Me"
  },
} as const;

export default hero;