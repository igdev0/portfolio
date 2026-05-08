import {collaborate} from '@/content/collaborate';

const hero = {
  tag: {
    type: "html",
    value: "<strong>GG</strong> Ioan George Dorultan",
  },
  title: {
    type: "text",
    value: "DEV Expert"
  },
  statement: {
    type: "text",
    value: `Pasionated engineer with a keen eye for technology of tomorrow.`
  },
  cta: {
    first: {
      type: "link",
      href: "#collaborate",
      icon: "chat",
      text: "Chat"
    },
    second: {
      type: "link",
      href: collaborate.social.calendar.href,
      text: "Book 30 min",
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