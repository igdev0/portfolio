const brand = "<span><</span>IGDev<span>/></span>";

const menu = {
  brand: {
    html: brand,
    href: "#",
  },
  navigation: {
    list: {
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
    },
    social: {
      github: {
        icon: "github",
        href: "https://github.com/igdev0"
      }
    },
  }
} as const;

export default menu;