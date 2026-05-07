
export const collaborate = {
  comment: "// Build",
  title: "{Collaborate}",
  statement: "Always open to work with talented teams.",
  social: {
    linkedin: {
      href: "https://www.linkedin.com/in/ioan-dorultan-364235143/",
      text: "Connect on linkedin"
    },
    github: {
      href: "https://github.com/igdev0",
      text: "Connect on github"
    },
    telegram: {
      href: "tg://resolve?domain=igdev0",
      text: "Chat on telegram"
    },
    email: {
      href: "ioan.dorultan@gmail.com",
      text: "Email me directly"
    },
    calendar: {
      href: "https://calendly.com/dorultanianos/30min",
      text: "Book 30 min"
    },
  }
} as const;

export type CollaborateType = typeof collaborate;