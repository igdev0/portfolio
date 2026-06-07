import Comment from '@/components/lib/comment';
import Container from '@/components/lib/container';
import Statement from '@/components/lib/statement';
import LinkButton from '@/components/lib/link-button';
import Tag from '@/components/lib/tag';
import "./index.css";
import {ExperienceEntityType, ExperienceTimelineType} from '@/content/types';


/**
 * Migrate from tailwind to vanilla extract
 * @param props
 * @constructor
 */
function Experience(props: ExperienceEntityType) {
  return (
      <div className="experience">
        <div className="timeline relative">
          <div className="timeline__head z-5 sticky top-16 translate-y-6"/>
        </div>
        <div>
          <div className="z-5 sticky top-16 pb-3 bg-(--background) py-6">
            <h3 className="text-2xl font-bold mb-0">{props.title}</h3>
          </div>
          <div className="flex flex-wrap gap-4 mt-4 relative">
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
          <div className="flex flex-wrap gap-3 mt-8 mb-0">
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
        <h1 className="text-4xl font-bold mt-3">{title}</h1>
        <Statement className="mb-6">
          {statement}
        </Statement>
        <div className="relative mt-6">
          <div
              className="border-l-2 mt-6 border-(--grid) border-dashed h-full absolute left-0 translate-x-2.5 -z-1"/>
          {
            roles.map((experience, index) => (
                <Experience key={index} {...experience}/>
            ))
          }
        </div>
      </Container>
  );
}