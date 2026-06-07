import {CollaborateType, ContactType} from '@/content/types';

export const contact: ContactType = {
  linkedin: "https://www.linkedin.com/in/ianos-dorultan-364235143/",
  github: "https://github.com/igdev0",
  telegram: "tg://resolve?domain=igdev0",
  email: "mailto:ianos.dorultan@gmail.com",
  calendly: "https://calendly.com/dorultanianos/30min",
};
export const collaborate: CollaborateType = {
  comment: "// Build",
  title: "{Collaborate}",
  statement: "I'm on the other end, let me know if you need anything.",
  contact
} as const;