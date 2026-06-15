import Comment from '@/components/comment';
import Container from '@/components/container';
import Statement from '@/components/statement';
import LinkButton from '@/components/link-button';
import Tag from '@/components/tag';
import "./index.css";
import {ExperienceEntityType, ExperienceTimelineType} from '@/content/types';
import Heading from '@/components/heading';


/**
 * Migrate from tailwind to vanilla extract
 * @param props
 * @constructor
 */
function Experience(props: ExperienceEntityType) {
  return (
      <div className="experience">
        <div className="timeline relative">
          <div className="timeline__head z-5 translate-y-3 sticky top-18"/>
        </div>
        <div>
          <div className="z-5 sticky top-18 py-3 mb-1 bg-(--background)">
            <h3 className="text-2xl font-bold mb-0">{props.title}</h3>
          </div>
          <div className="flex flex-wrap gap-4 relative">
            {
              props.tags.map((tag, index) => (
                  <Tag key={index}>
                    {tag}
                  </Tag>
              ))
            }
          </div>
          <ul className="experience-contributions my-4">
            {
              props.contributions?.map((contribution, index) => (
                  <li key={index}>{contribution}</li>
              ))
            }
          </ul>
          <div className="flex flex-wrap gap-3 mt-5 mb-0">
            {
              props.links.map((link, index) => (
                  <LinkButton key={index}
                              href={link.href}
                              external
                              variant="secondary"
                              iconPosition="right"
                              size="small"
                              icon="new-tab">
                    {link.text}
                  </LinkButton>
              ))
            }
          </div>
        </div>
      </div>
  );
}


export default function Expertise(props: ExperienceTimelineType) {
  const {comment, title, statement, roles} = props;
  return (
      <Container className="pt-40" id="experience">
        <Comment>{comment}</Comment>
        <Heading as="h2">{title}</Heading>
        <Statement className="mb-6">
          {statement}
        </Statement>
        <div className="relative flex flex-col mt-16 gap-12">
          <div
              className="border-l-2 top-3.5 border-(--grid) border-dashed h-[99%] w-0 left-0 translate-x-2.5 absolute"/>

          {
            roles.map((experience, index) => (
                <Experience key={index} {...experience}/>
            ))
          }
        </div>
      </Container>
  );
}