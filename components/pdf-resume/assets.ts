import {createTw} from 'react-pdf-tailwind';

export const assets = {
  me: "/images/me.png",
  'arrow-right': '/resume-icons/arrow-right.svg',
  'at-sign': '/resume-icons/at-sign.svg',
  'blocks': '/resume-icons/blocks.svg',
  'book': '/resume-icons/book.svg',
  'boxes': '/resume-icons/boxes.svg',
  'building': '/resume-icons/building.svg',
  'calendar': '/resume-icons/calendar.svg',
  'check': '/resume-icons/check.svg',
  'chevron-right': '/resume-icons/chevron-right.svg',
  'code': '/resume-icons/code.svg',
  'corner': '/resume-icons/corner.svg',
  'database': '/resume-icons/database.svg',
  'git-branch': '/resume-icons/git-branch.svg',
  'github': '/resume-icons/github.svg',
  'globe': '/resume-icons/globe.svg',
  'map-pin': '/resume-icons/map-pin.svg',
  'map-pin-black': '/resume-icons/map-pin-black.svg',
  'network': '/resume-icons/network.svg',
  'phone': '/resume-icons/phone.svg',
  'server': '/resume-icons/server.svg',
  'tablet-smartphone': '/resume-icons/tablet-smartphone.svg',
  'test-tube-diagonal': '/resume-icons/test-tube-diagonal.svg',
  'wrench': '/resume-icons/wrench.svg',
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