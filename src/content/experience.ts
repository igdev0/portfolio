import {ExperienceTimelineType} from '@/content/types';
import {filterProjectsByOwner} from '@/components/utils';
import {portfolio} from '@/content/portfolio';

const experience: ExperienceTimelineType = {
  comment: "// Work experience",
  title: "{Experience}",
  statement: "More than half-decate in web development",
  roles: [
    {
      title: "[Independent Engineer]",
      summary: `Dedicated time to professional development by exploring new technologies and building side projects, including BeeFunded, a Web3 hackathon project. During this period, I also redesigned and rebuilt my personal portfolio using Next.js, TypeScript, and Tailwind CSS.`,
      contractType: "Full-Time",
      brand: "IGDev",
      company: "Self-Employed",
      jobType: "Remote",
      city: "Baia Mare",
      countryShort: "RO",
      country: "Romania",
      startDate: "April 2024",
      projects: filterProjectsByOwner(portfolio, 'IGDev'),
      contributions: [
        "Explored Rust systems programming through hands-on portfolio and language fundamentals.",
        "Explored blockchain and decentralized application architectures.",
        "Completed the Alchemy Ethereum and Solidity bootcamp focused on smart contract development.",
        "Collaborated on and delivered a web3 hackathon project.",
        "Redesigned and rebuilt my personal portfolio.",
        "Collaborated with a UI/UX designer to deliver a CMS-driven website for a client of mine using Strapi and NextJS.",
      ],
    },
    {
      title: "[Frontend Engineer]",
      brand: "IOG",
      summary: "Worked within a cross-functional product team at IOG’s Atala Product Vision, contributing to the ideation, prototyping, and validation of strategic products and initiatives within the Hyperledger Identus ecosystem.",
      contractType: "Full-Time",
      company: "Input-Output",
      jobType: "Remote",
      countryShort: "RO",
      city: "Baia Mare",
      country: "Romania",
      endDate: "April 2024",
      startDate: "April 2022",
      contributions: [
        "Led frontend development and UX implementation for internal tools, documentation platform, public-facing websites, and prototypes within the Atala PRISM (Identus Hyperledger) ecosystem.",
        "Collaborated with cross-functional teams on ideation, rapid prototyping, and delivery of MVPs leveraging the Atala PRISM SSI agent, accelerating early product validation.",
        "Built and maintained a shared component library using Styled Components and Storybook, translating Figma designs into reusable, scalable UI components, improving frontend consistency and accelerating development.",
        "Contributed to the design and development of the wallet SDK, improving developer experience and functionality.",
        "Participated in Agile ceremonies (PI planning, sprint planning, reviews, retrospectives), ensuring alignment between product direction and engineering delivery.",
      ],
      projects: filterProjectsByOwner(portfolio, 'IOG'),
    },
    {
      title: "[Full-Stack Developer]",
      brand: "FV",
      summary: "Contributed to multiple client portfolio as part of a small Agile full-stack team, turning design requirements into responsive, accessible, and animation-rich web applications.",
      contractType: "Full-Time",
      city: "London",
      country: "United Kingdom",
      countryShort: "UK",
      company: "FinerVision",
      jobType: "Hybrid",
      endDate: "February 2022",
      startDate: "February 2020",
      contributions: [
        "Designed, developed, and maintained offline-first medical applications using Expo and React Native within a small Agile team, focusing on reliability in constrained environments.",
        "Modernized and extended React codebases by delivering production features, client-driven enhancements, and critical bug fixes across multiple applications.",
        "Translated Figma/XD designs into responsive, accessible, cross-browser interfaces, ensuring consistent UX across applications.",
        "Built and delivered CMS-driven web applications using React, TypeScript, and Next.js with SCSS and Strapi, Directus, or WordPress across multiple client portfolio.",
        "Delivered features under tight deadlines while maintaining production-quality standards and predictable release cycles.",
        "Collaborated with teammates to investigate and resolve hard-to-reproduce critical production issues in React Native applications.",
        "Worked directly with clients and stakeholders to refine requirements, align expectations, and improve project delivery.",
      ],
      projects: filterProjectsByOwner(portfolio, 'FinerVision'),
    },
  ]
};

export default experience;