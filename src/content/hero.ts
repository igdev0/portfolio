import {collaborate} from '@/content/collaborate';

const hero = {
  tag: {
    type: "html",
    value: "Ianos Dorultan",
  },
  title: {
    type: "text",
    value: "Software Engineer"
  },
  statement: {
    type: "text",
    value: `Frontend-focused engineer specializing in performant and intuitive user interfaces.`
  },
  cta: {
    first: {
      type: "link",
      href: "#collaborate",
      icon: "chat",
      text: "Let's talk"
    },
    second: {
      type: "link",
      href: collaborate.social.calendar.href,
      text: "Book a call",
      icon: 'calendar'
    }
  },
  card: {
    image: {
      type: "image",
      width: 383,
      height: 383,
      src: "/images/me.webp",
      alt: "me"
    },
  }
} as const;

export default hero;