import Comment from '@/components/lib/comment';
import Container from '@/components/lib/container';
import Statement from '@/components/lib/statement';
import LinkButton from '@/components/lib/link-button';
import {experience} from '@/content/experience';
import Tag from '@/components/lib/tag';
import "./index.css";


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


/**
 * Migrate from tailwind to vanilla extract
 * @param props
 * @constructor
 */
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
          <ul className="responsabilities my-10">
            {
              props.responsibilities?.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
              ))
            }
          </ul>
          <div className="flex flex-wrap gap-3">
            {
              props.links.map((link, index) => (
                  <LinkButton key={index}
                              href={link.href}
                              variant="secondary"
                              icon="link">
                    {link.text}
                  </LinkButton>
              ))
            }
          </div>
        </div>
      </div>
  );
}

export interface TimelineProps {
  data: typeof experience;
}

export default function Timeline(props: TimelineProps) {
  const {data} = props;
  return (
      <Container className="pt-40">
        <Comment>{data.comment}</Comment>
        <h1 className="text-4xl font-bold mt-3">{data.title}</h1>
        <Statement className="mb-6">
          I got more than 5 years of experience.
        </Statement>
        <div className="relative my-6">
          <div className="border-l-2 border-(--semigrid) border-dashed h-full absolute left-0 translate-x-2.5 -z-1"/>
          {
            data.experiences.map((experience, index) => (
                <Experience key={index + 1} {...experience}/>
            ))
          }
        </div>
      </Container>
  );
}