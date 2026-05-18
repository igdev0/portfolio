import {IconNames} from '@/components/lib/icon';

interface Tech {
  [key: string]: {
    icon: IconNames,
    tabs: {
      [key: string]: {
        statement: string;
      }
    }
  }
}
export const stack = {
  title: {
    type: 'text',
    value: '{Tech Stack}'
  },
  statement: {
    type: 'statement',
    value: 'Always learning, always shipping.'
  },
  tech: {
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
        'Next': {
          statement: "Makes production React apps feel structured and scalable."
        },
        'Vue': {
          statement: "Clean developer experience with a really nice learning curve."
        },
        'Zustand': {
          statement: "Simple and predictable state management."
        },
        'Tailwind CSS': {
          statement: "Fast workflow if you stay disciplined."
        },
        'React Router': {
          statement: "Flexible routing without getting in your way."
        },
      } as const
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
        'Node': {
          statement: "Fast iteration and a huge ecosystem."
        },
        'Bun': {
          statement: "Ridiculously fast and getting better fast."
        },
        'Express': {
          statement: "Minimal, simple, and still relevant."
        },
        'Nest': {
          statement: "Structured backend architecture without the mess."
        },
      } as const
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
    "Infra & DevOps": {
      icon: "blocks",
      tabs: {
        'Docker': {
          statement: "Makes environments predictable instead of painful."
        },
        "Github": {
          statement: "Good tooling, smooth collaboration, massive ecosystem."
        },
        "Bitbucket": {
          statement: "Gets the job done, especially in enterprise setups."
        },
        'Github Actions': {
          statement: "CI/CD setup without unnecessary complexity."
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
  } as Tech,
} as const;

export const profile = {
  tag: {
    type: 'text',
    value: '// Profile'
  },
  title: {
    type: 'text',
    value: '{About me}'
  },
  bio: {
    type: 'html',
    value: `
        <p>
            Full Stack Engineer with 5+ years of experience building web and mobile applications focused on performance, maintainability, and clean architecture. 
            <strong>Strong expertise in React and TypeScript</strong>, with experience across backend APIs, cloud deployments, and CI/CD workflows using Docker and modern tooling. 
            Proven ability to deliver production-ready applications across frontend, backend, and infrastructure.
        </p>
    `
  },
  stack,
} as const;
