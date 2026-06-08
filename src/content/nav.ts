import {NavType} from '@/content/types';

const brand = "<span><</span><strong>IGDev</strong><span>/></span>";

const nav: NavType = {
  brand,
  links: [
    {
      text: "Passions",
      href: "#passions",
    },
    {
      text: "Experience",
      href: "#experience",
    },
    {
      text: "Tech Stack",
      href: "#skills",
    },
    {
      text: "Contact",
      href: "#contact",
    }
  ],
};

export default nav;