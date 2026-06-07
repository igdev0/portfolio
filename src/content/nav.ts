import {NavType} from '@/content/types';

const brand = "<span><</span><strong>IGDev</strong><span>/></span>";

const nav: NavType = {
  brand,
  links: [
    {
      text: "Profile",
      href: "#skills",
    },
    {
      text: "Experience",
      href: "#experience",
    },
    {
      text: "Lets Build",
      href: "#collaborate",
    }
  ],
};

export default nav;