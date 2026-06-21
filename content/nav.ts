import {NavType} from '@/content/types';
import contact from '@/content/contact';

const brand = "<span><</span><strong>IGDev</strong><span>/></span>";

const nav: NavType = {
  brand,
  github: contact.github,
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
      text: "Colab",
      href: "#message",
    },
    {
      text: "Blogs",
      href: "/blog",
    }
  ],
};

export default nav;