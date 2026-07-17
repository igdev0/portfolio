import {ExperienceTimelineType} from '@/content/types';
import {portfolio} from '@/content/portfolio';
import {filterProjectsByOwner} from '@/utils';

const experience: ExperienceTimelineType = {
      comment: "// Work experience",
      title: "{Experience}",
      statement: "More than half-decate in production-grade app development",
      roles: [
        {
          title: "[Full-Stack Engineer]",
          summary: `Independent engineer delivering end-to-end solutions for multiple clients while re-establishing my professional brand after a career break.`,
          contractType: "Full-Time",
          brand: "IGDev",
          company: "Freelance",
          jobType: "Remote",
          city: "London",
          countryShort: "UK",
          country: "United Kingdom",
          startDate: "March 2025",
          projects: filterProjectsByOwner(portfolio, 'IGDev'),
          contributions: [
            "Redesigned and rebuilt my personal portfolio using TypeScript, Next.js, Tailwind CSS and Figma, improving performance, maintainability, and overall UI polish.",
            "Delivered a CMS-driven website in collaboration with a UI/UX designer using Strapi and Next.js, enabling structured content management and streamlined updates for the client.",
            "Built a reusable résumé-as-code system with react-pdf, centralizing personal content into a single source of truth for consistent, maintainable document generation.",
            // "Expanded systems programming expertise by completing structured Rust training through The Rust Programming Language and applying core concepts in practice projects.",
            // "Built and shipped a Web3 hackathon MVP on Ethereum, contributing to smart contract and frontend integration under tight time constraints.",
            // "Completed the Alchemy Ethereum & Solidity Bootcamp, gaining hands-on experience in smart contract development, deployment, and EVM fundamentals.",
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
            "Built the frontend for an enterprise DevOps tool supporting decentralized identity infrastructure using TypeScript, Vite, React, React Query, and Styled Components.",
            "Built a shared component library using Styled Components and Storybook, improving UI consistency and design-to-code alignment.",
            "Developed no-code verifiable credential tools for schema management, credential issuance, and verification using React, TypeScript, and modern frontend technologies.",
            "Developed React-based application demos to validate product concepts and align product direction within the team.",
            "Implemented the Atala PRISM landing page using Gatsby, React, and Styled Components, translating designs into a responsive and performant user experience.",
            "Created interactive Figma prototypes to accelerate early-stage product validation and collaboration.",
            "Contributed to wallet SDK development, improving integration workflows for SSI functionality.",
          ],
          projects: filterProjectsByOwner(portfolio, 'IOG'),
        },
        {
          title: "[Full-Stack Developer]",
          brand: "FV",
          summary: "Contributed to multiple client portfolio as part of a small Agile full-stack team, turning design requirements into responsive, accessible, cross-platform and animation-rich web and native applications.",
          contractType: "Full-Time",
          city: "London",
          country: "United Kingdom",
          countryShort: "UK",
          company: "FinerVision",
          jobType: "Hybrid",
          endDate: "February 2022",
          startDate: "February 2020",
          contributions: [
            "- Built the Collect+ (PayPoint) website from the ground up using modern React-based architecture, delivering a fully responsive, production-ready client web platform.",
            "- Built HSBC e-learning modules for embedded systems using React, TypeScript, and CSS3, delivering interactive enterprise training interfaces.",
            "- Developed symptom-tracking mobile applications for Teva and Antiblanks using React Native, Expo, JavaScript, and TypeScript, focusing on usability and cross-platform reliability.",
            "- Delivered seasonal RSVP-based websites for Sainsbury's and Habitat, supporting campaign-driven event workflows with fast turnaround delivery cycles.",
            "- Owned and maintained legacy web and native applications, ensuring stability, continuous feature delivery, and production issue resolution.",
            "- Built and maintained responsive cross-platform email templates for client campaigns, ensuring consistent rendering across major email clients and devices.",
          ],
          projects: filterProjectsByOwner(portfolio, 'FinerVision'),
        },
      ]
    }
;

export default experience;