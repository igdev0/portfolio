const brand = "<span><</span><strong>IGDev</strong><span>/></span>";

const nav = {
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
        text: "Experience",
        href: "#experience",
      },
      letsBuild: {
        text: "Lets Build",
        href: "#collaborate",
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

export default nav;