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
      href: "#about",
      text: "About me"
    },
    second: {
      type: "link",
      href: "#lets-chat",
      text: "Lets Chat",
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
};

export default hero;