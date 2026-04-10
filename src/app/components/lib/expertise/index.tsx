import Comment from '@/app/components/lib/comment';
import Container from '@/app/components/lib/container';
import Statement from '@/app/components/lib/statement';
import "./index.css";
import {PropsWithChildren} from 'react';
import LinkButton from '@/app/components/lib/link-button';


interface ExternalLink {
  href: string;
  text: string;
}

export interface ExperienceProps {
  title: string;
  tags: string[];
  responsibilities: string[];
  links: ExternalLink[];
}


function Tag(props: PropsWithChildren) {
  return (
      <div className="px-2 py-1 rounded-sm border  border-default-500 dark:border-default-700 bg-(--bg-surface-2)">
        {props.children}
      </div>
  );
}

function Experience(props: ExperienceProps) {
  return (
      <div className="experience">
        <div className="timeline">
          <div className="timeline__head"/>
        </div>
        <div>
          <h3 className="text-2xl font-bold">{props.title}</h3>
          <div className="flex flex-wrap gap-4 mt-4 relative">
            {
              props.tags.map((tag, index) => (
                  <Tag key={index}>
                    {tag}
                  </Tag>
              ))
            }
          </div>
          <ul className="flex flex-col gap-2 font-medium my-10">
            {
              props.responsibilities?.map((responsibility, index) => (
                  <li key={index}><span className="text-accent-500">{'>'}</span> {responsibility}</li>
              ))
            }
          </ul>
          <div className="flex flex-wrap gap-3">
            {
              props.links.map((link, index) => (
                  <LinkButton href={link.href} variant="secondary" icon="github">
                    {link.text}
                  </LinkButton>
              ))
            }
          </div>
        </div>
      </div>
  );
}

const contents = {
  comment: "// Expertise",
  title: "{Expertise}",
  experiences: [
    {
      title: "[Open-Source Engineer]",
      tags: ["Input output Global", "Full-Time", "Remote", "December 2022 → April 2024"],
      responsibilities: ['Led the front-end development of the web tools.', 'Led the front-end development of the web tools.', 'Led the front-end development of the web tools.'],
      links: [
        {
          href: "",
          text: "STAR App",
        },
        {
          href: "",
          text: "Teva MS App",
        }
      ],
    },
    {
      title: "[Frontend Engineer]",
      tags: ["Finer Vision", "Full-Time", "Hybrid", "December 2020 → February 2022"],
      responsibilities: ['Led the front-end development of the web tools.', 'Led the front-end development of the web tools.', 'Led the front-end development of the web tools.'],
      links: [
        {
          href: "",
          text: "STAR App",
        },
        {
          href: "",
          text: "Teva MS App",
        }
      ],

    },
    {
      title: "[Freelancer]",
      tags: ["Freelancer", "Part-Time", "Remote", "December 2017 → February 2020"],
      responsibilities: ['Led the front-end development of the web tools.', 'Led the front-end development of the web tools.', 'Led the front-end development of the web tools.'],
      links: [
        {
          href: "",
          text: "STAR App",
        },
        {
          href: "",
          text: "Teva MS App",
        }
      ],

    }
  ] as ExperienceProps[]
};

export default function Expertise() {
  return (
      <Container className="pt-40">
        <Comment>{contents.comment}</Comment>
        <h1 className="text-4xl font-bold mt-3">{contents.title}</h1>
        <Statement className="mb-6">
          I got more than 5 years of experience.
        </Statement>
        <div className="relative my-6">
          <div className="border-l-2 border-(--semigrid) border-dashed h-full absolute left-0 translate-x-2.5 -z-1"/>
          {
            contents.experiences.map((experience, index) => (
                <Experience key={index + 1} {...experience}/>
            ))
          }
        </div>
      </Container>
  );
}