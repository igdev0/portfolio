import {IconTypes} from '@/components/ui/icon';

const brand = "<span><</span>IGDev<span>/></span>";

interface NavigationItem {
  text?: string;
  href: string;
  icon?: IconTypes;
}

const menu = {
  brand: {
    html: brand,
    href: "#",
  },
  navigation: {
    profile: {
      text: "Profile",
      href: "#profile",
    },
    expertise: {
      text: "Expertise",
      href: "#expertise",
    },
    letsBuild: {
      text: "Lets Build",
      href: "#letsBuild",
    },
    github: {
      icon: "github",
      href: "https://github.com/igdev0"
    }
  } as Record<string, NavigationItem>
} as const;

export default menu;