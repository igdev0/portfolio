import {ExperienceEntityType, ExperienceTimelineType} from '@/content/types';

export const experience:ExperienceTimelineType = {
  comment: "// Work experience",
  title: "{Experience}",
  statement: "I have over 5 years of experience in web development",
  roles: [
    {
      title: "[Independent Engineer]",
      tags: ['Self-Employed', 'September 2024 → Now'],
      links: [
        {
          href: 'https://github.com/igdev0/tokensmith',
          text: "Tokensmith",
        },
        {
          href: "https://pro-scan-solutions.ro/inspectii-foto-video",
          text: "Pro Scan Solutions",
        },
        {
          href: 'https://github.com/igdev0/bee-funded',
          text: "BeeFunded",
        },
      ],
      contributions: [
        "Explored Rust systems programming through hands-on projects and language fundamentals.",
        "Explored blockchain and decentralized application architectures.",
        "Completed the Alchemy Ethereum and Solidity bootcamp focused on smart contract development.",
        "Collaborated on and delivered a web3 hackathon project.",
        "Redesigned and rebuilt my personal portfolio.",
        "Collaborated with a UI/UX designer to deliver a CMS-driven website. for a client of mine using Strapi and NextJS.",
      ],
    },
    {
      title: "[Frontend Engineer]",
      tags: ["Input Output Global", "Full-Time", "Remote", "April 2022 → April 2024"],
      contributions: [
        "Led frontend development and UX implementation for internal tools, documentation platform, public-facing websites, and prototypes within the Atala PRISM (Identus Hyperledger) ecosystem.",
        "Collaborated with cross-functional teams on ideation, rapid prototyping, and delivery of MVPs leveraging the Atala PRISM SSI agent, accelerating early product validation.",
        "Built and maintained a shared component library using Styled Components and Storybook, translating Figma designs into reusable, scalable UI components, improving frontend consistency and accelerating development.",
        "Contributed to the design and development of the wallet SDK, improving developer experience and functionality.",
        "Participated in Agile ceremonies (PI planning, sprint planning, reviews, retrospectives), ensuring alignment between product direction and engineering delivery.",
      ],
      links: [
        {
          href: "https://hyperledger-identus.github.io/docs/",
          text: "Identus",
        },
      ],
    },
    {
      title: "[Full-Stack Developer]",
      tags: ["Finer Vision", "Full-Time", "Hybrid", "December 2020 → February 2022"],
      contributions: [
        "Designed, developed, and maintained offline-first medical applications using Expo and React Native within a small Agile team, focusing on reliability in constrained environments.",
        "Modernized and extended React codebases by delivering production features, client-driven enhancements, and critical bug fixes across multiple applications.",
        "Translated Figma/XD designs into responsive, accessible, cross-browser interfaces, ensuring consistent UX across applications.",
        "Built and delivered CMS-driven web applications using React, TypeScript, and Next.js with SCSS and Strapi, Directus, or WordPress across multiple client projects.",
        "Delivered features under tight deadlines while maintaining production-quality standards and predictable release cycles.",
        "Collaborated with teammates to investigate and resolve hard-to-reproduce critical production issues in React Native applications.",
        "Worked directly with clients and stakeholders to refine requirements, align expectations, and improve project delivery.",
      ],
      links: [
        {
          href: "https://apps.apple.com/gb/app/star-the-symptom-tracker/id1560476806?platform=iphone",
          text: "STAR App",
        },
        {
          href: "https://play.google.com/store/apps/details?id=com.finervision.RFD",
          text: "RFD App",
        },
        {
          href: 'https://bluespherebio.com/',
          text: "Bluespherebio",
        }
      ],

    },
  ] as ExperienceEntityType[]
};