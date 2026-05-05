const brand = "<span><</span><strong>IGDev</strong><span>/></span>";

const menu = {
  brand: {
    html: brand,
    href: "#top",
  },
  navigation: {
    list: {
      profile: {
        text: "Profile",
        href: "#profile",
      },
      expertise: {
        text: "Expertise",
        href: "#experience",
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