import {TechType} from '@/content/types';

const skills = {
  "Languages": {
    icon: "book",
    tabs: {
      'JavaScript': {
        statement: "Flexible, chaotic, and somehow still everywhere."
      },
      'TypeScript': {
        statement: "Makes large codebases way less painful to work with."
      },
      'HTML5': {
        statement: "Easy to start with, surprisingly deep when done right.",
      },
      'CSS3': {
        statement: "Looks simple until you try centering something at 2AM.",
      },
      'Rust': {
        statement: "Steep learning curve, but the performance and safety are worth it."
      },
    }
  },
  "Frontend": {
    icon: "code",
    tabs: {
      'React': {
        statement: "Component-driven development done right."
      },
      'Next.js': {
        statement: "Makes production React apps feel structured and scalable."
      },
      'Zustand': {
        statement: "Simple and predictable state management."
      },
      'Tailwind CSS': {
        statement: "Fast workflow if you stay disciplined."
      },
    } as const
  },
  "API Integration": {
    icon: "network",
    tabs: {
      "GraphQL": {
        statement: "Flexible data fetching without over-fetching or under-fetching."
      },
      "REST": {
        statement: "Still the default choice for most web APIs."
      }
    }
  },
  "Testing": {
    icon: "test",
    tabs: {
      "Jest": {
        statement: "Fast and reliable unit testing framework for JavaScript applications."
      },
      "Cypress": {
        statement: "End-to-end testing tool for testing real user flows in the browser."
      }
    }
  },
  "Mobile": {
    icon: "phone",
    tabs: {
      "React Native": {
        statement: "Cross-platform mobile development with native-like performance."
      },
      "Expo": {
        statement: "Streamlines React Native development with faster setup and deployment."
      },
    }
  },
  "Backend": {
    icon: "server",
    tabs: {
      'Node.js': {
        statement: "Fast iteration and a huge ecosystem."
      },
      'Strapi': {
        statement: "Headless CMS that gets APIs and content management up and running fast."
      },
      'Payload': {
        statement: "Developer-first CMS with full control over content and APIs."
      },
      "Prisma": {
        statement: "Type-safe database access that fits naturally with TypeScript."
      },
      'Express': {
        statement: "Minimal, simple, and still relevant."
      },
      'Nest.js': {
        statement: "Structured backend architecture without the mess."
      },
    } as const
  },
  "Blockchain": {
    icon: 'boxes',
    tabs: {
      "Solidity": {
        statement: "Smart contract programming language for Ethereum-based applications."
      },
      "Ethereum": {
        statement: "Decentralized blockchain platform for building distributed applications."
      },
      "Hardhat": {
        statement: "Development environment for testing, deploying, and debugging smart contracts."
      }
    }
  },
  "DevOps": {
    icon: "blocks",
    tabs: {
      'Docker': {
        statement: "Makes environments predictable instead of painful."
      },
      'Github Actions': {
        statement: "CI/CD setup without unnecessary complexity."
      },
    }
  },
  "Databases": {
    icon: "database",
    tabs: {
      "MySQL": {
        statement: "Reliable and battle-tested."
      },
      "Sqlite": {
        statement: "Lightweight and perfect for local or embedded use."
      },
      "MongoDB": {
        statement: "Flexible document model, great for fast-changing schemas."
      }
    }
  },
  "Platforms": {
    icon: "git",
    tabs: {
      "Github": {
        statement: "Industry standard for version control and collaboration."
      },
      "Bitbucket": {
        statement: "A common choice in enterprise development environments."
      },
      "Digital Ocean": {
        statement: "Simple cloud infrastructure for deploying and scaling applications."
      },
      "Vercel": {
        statement: "Makes deploying modern web applications almost effortless."
      },
    } as const
  },
  "Tools": {
    icon: 'wrench',
    tabs: {
      'Figma': {
        statement: "Makes collaboration between design and development smooth."
      },
      'Adobe Illustrator': {
        statement: "Still one of the best tools for vector work."
      },
      "Webstorm": {
        statement: "Top-tier TypeScript IDE. Hard to switch away from it."
      },
      'Photoshop': {
        statement: "Useful when things need more than basic edits."
      },
    } as const
  }
} as TechType;

export default skills;