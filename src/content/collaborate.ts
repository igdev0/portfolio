
export const collaborate = {
  comment: "// Build",
  title: "{Collaborate}",
  statement: "Open to meaningful collaborations and ambitious projects.",
  social: {
    linkedin: {
      href: "https://www.linkedin.com/in/ianos-dorultan-364235143/",
      text: ""
    },
    github: {
      href: "https://github.com/igdev0",
      text: ""
    },
    telegram: {
      href: "tg://resolve?domain=igdev0",
      text: ""
    },
    email: {
      href: "mailto:ioan.dorultan@gmail.com",
      text: ""
    },
    calendar: {
      href: "https://calendly.com/dorultanianos/30min",
      text: "Book a call"
    },
  }
} as const;

export type CollaborateType = typeof collaborate;