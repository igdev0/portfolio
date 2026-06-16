import {ExperiencePinType} from '@/content/types';
import Tag from '@/components/tag';
import LinkButton from '@/components/link-button';

export default function ExperiencePin(props: ExperiencePinType) {
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