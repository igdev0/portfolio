import {createTw} from 'react-pdf-tailwind';

export const assets = {
  me: "/images/me.png",
  'arrow-right': '/pdf-resume-icons/arrow-right.svg',
  'at-sign': '/pdf-resume-icons/at-sign.svg',
  'blocks': '/pdf-resume-icons/blocks.svg',
  'book': '/pdf-resume-icons/book.svg',
  'boxes': '/pdf-resume-icons/boxes.svg',
  'building': '/pdf-resume-icons/building.svg',
  'calendar': '/pdf-resume-icons/calendar.svg',
  'check': '/pdf-resume-icons/check.svg',
  'chevron-right': '/pdf-resume-icons/chevron-right.svg',
  'code': '/pdf-resume-icons/code.svg',
  'corner': '/pdf-resume-icons/corner.svg',
  'database': '/pdf-resume-icons/database.svg',
  'git-branch': '/pdf-resume-icons/git-branch.svg',
  'github': '/pdf-resume-icons/github.svg',
  'globe': '/pdf-resume-icons/globe.svg',
  'map-pin': '/pdf-resume-icons/map-pin.svg',
  'map-pin-black': '/pdf-resume-icons/map-pin-black.svg',
  'network': '/pdf-resume-icons/network.svg',
  'phone': '/pdf-resume-icons/phone.svg',
  'server': '/pdf-resume-icons/server.svg',
  'tablet-smartphone': '/pdf-resume-icons/tablet-smartphone.svg',
  'test-tube-diagonal': '/pdf-resume-icons/test-tube-diagonal.svg',
  'wrench': '/pdf-resume-icons/wrench.svg',
};

export const fonts = [
  {
    family: "Inter",
    fonts: [
      {
        src: "/fonts/Inter/static/Inter_18pt-Regular.ttf",
        fontWeight: "normal",
      },
      {
        src: "/fonts/Inter/static/Inter_18pt-Bold.ttf",
        fontWeight: "bold",
      }
    ],

  },
  {
    family: "BarlowCondensed",
    body: {
      fontSize: '10px'
    },
    fonts: [
      {
        src: "/fonts/Barlow_Condensed/BarlowCondensed-Bold.ttf",
        fontWeight: 700,
      },
    ],
  }
]


export const tw = createTw({
  fontFamily: {
    sans: ["Inter"],
  },
  colors: {
    accent: 'oklch(58.5% 0.233 277.117)',
  },
  theme: {
    fontFamily: {
      sans: ["Inter"],
    },
  },
});