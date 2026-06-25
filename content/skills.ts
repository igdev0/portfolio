import {TechType} from '@/content/types';

/**
 * - My First fuck-up was a "rm -rf ." while being in sudo on the staging server.
 *
 * While I was working on collect+ store finder, I accidentally deleted the package-lock.json file that triggered a failing rebuild.
 */
const skills: TechType = {
  "Languages": {
    icon: "book",
    tabs: {
      'TypeScript': {
        statement: "Used extensively with Next.js, React, Nest.js and Node.js to build client-facing web applications and automations."
      },
      'JavaScript': {
        statement: "Used as my core language at the beginning of my career to build full-stack web and mobile applications."
      },
      'HTML5': {
        statement: "Applied core web fundamentals to deliver responsive, accessible, and animation-rich web application interfaces."
      },
      'CSS3': {
        statement: "Leveraged styling standards alongside frameworks to deliver responsive, cross-browser interfaces from Figma designs."
      },
      'Rust': {
        statement: "Built several experimental programs while reading The Rust Book."
      },
    }
  },
  "Frontend": {
    icon: "code",
    tabs: {
      'React': {
        statement: "Used React extensively through my career to build small to large projects web and native applications."
      },
      'Next.js': {
        statement: "Used Next.js (pages router) on several large content-driven websites and recently rebuilt my portfolio using the modern app Router."
      },
      'Zustand': {
        statement: "Used Zustand for managing global UI state on few medium-sized SPAs utilizing React and vite."
      },
      'Storybook': {
        statement: "Used Storybook to document, showcase, and test components for the shared React component library developed for Atala PRISM."
      },
      'Styled-Components': {
        statement: "Used Styled-Components to create reusable, maintainable, and scalable component-based styling systems in React applications."
      },
      'Tailwind CSS': {
        statement: "Used Tailwind CSS across multiple large-scale projects to rapidly build responsive user interfaces, including a complete rebuild of my personal portfolio using Tailwind CSS 4."
      },
    }
  },
  "API Integration": {
    icon: "network",
    tabs: {
      "GraphQL": {
        statement: "Used GraphQL with Apollo Client across multiple web projects to efficiently query, manage, and consume data from backend services."
      },
      "REST": {
        statement: "Designed and built couple of REST APIs using Node.js, Express, NestJS, and Strapi CMS, and integrated multiple third-party APIs in production-grade React applications."
      }
    }
  },
  "Testing": {
    icon: "test",
    tabs: {
      "Jest": {
        statement: "Implemented unit and integration tests with Jest across frontend and backend codebases to increase reliability and reduce regressions."
      },
      "Cypress": {
        statement: "Used as part of my end-to-end testing stack to validate frontend user experiences."
      }
    }
  },
  "Mobile": {
    icon: "phone",
    tabs: {
      "React Native": {
        statement: "Designed, developed, and maintained offline-first, medical applications for multiple clients at FinerVision."
      },
      "Expo": {
        statement: "Used alongside React Native to build and deliver reliable mobile applications."
      },
    }
  },
  "Backend": {
    icon: "server",
    tabs: {
      'Node.js': {
        statement: "Built REST APIs, automation scripts, and backend tools across multiple projects using Node.js."
      },
      'Strapi': {
        statement: "Used Strapi CMS to model content and expose APIs for content-driven web applications."
      },
      'Payload': {
        statement: "Used to manage content on my portfolio."
      },
      "Prisma": {
        statement: "Used Prisma ORM to build and iterate on MVPs and internal tools at IOG."
      },
      'Express': {
        statement: "Used within a full-stack context to build backend APIs and services."
      },
      'Nest.js': {
        statement: "Used NestJS to build modular backend APIs following a structured and maintainable architecture."
      },
    }
  },
  "Blockchain": {
    icon: 'boxes',
    tabs: {
      "Solidity": {
        statement: "Completed the Alchemy bootcamp, gaining hands-on experience writing and developing smart contracts."
      },
      "Ethereum": {
        statement: "Collaborated on delivering a Web3 hackathon MVP (BeeFunded) built on Ethereum testnet."
      },
      "Hardhat": {
        statement: "Used as an Ethereum development environment to compile, test, and deploy smart contracts."
      }
    }
  },
  "DevOps": {
    icon: "blocks",
    tabs: {
      'Docker': {
        statement: "Integrated into the infrastructure workflow for containerizing applications and environment consistency."
      },
      'Github Actions': {
        statement: "Used for setting up automated CI/CD workflows and managing deployment pipelines."
      },
    }
  },
  "Databases": {
    icon: "database",
    tabs: {
      "MySQL": {
        statement: "Integrated structured database storage into application architectures for persistent data management."
      },
      "Sqlite": {
        statement: "Used for local database management."
      }
    }
  },
  "Platforms": {
    icon: "git",
    tabs: {
      "Github": {
        statement: "Used heavily for source control management, team collaboration, and codebase maintenance."
      },
      "Bitbucket": {
        statement: "Used Bitbucket for source control, pull request reviews, and team collaboration at FinerVision."
      },
      "Digital Ocean": {
        statement: "Used Digital Ocean Droplets to provision and maintain web servers for client projects."
      },
      "Vercel": {
        statement: "Used Vercel for deploying, hosting, and managing personal web applications built with React and Next.js."
      },
    }
  },
  "Tools": {
    icon: 'wrench',
    tabs: {
      'Figma': {
        statement: "Used Figma extensively since 2021 to create prototypes, contribute to design systems, and translate designs into reusable React components."
      },
      'Adobe Illustrator': {
        statement: "Used for asset handling and design support alongside development processes."
      },
      "Webstorm": {
        statement: "Used as a primary integrated development environment (IDE) for modern full-stack development."
      },
      'Photoshop': {
        statement: "Applied for image asset optimization and design processing during application construction."
      },
    }
  }
};

export default skills;