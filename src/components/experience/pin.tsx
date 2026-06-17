import {ExperiencePinType} from '@/content/types';
import LinkButton from '@/components/link-button';
import Tag from '@/components/tag';
import {Building, Clock, MapPin} from 'lucide-react';
import Panel from '@/components/panel';
import moment from 'moment';

export default function ExperiencePin(props: ExperiencePinType) {

  const start = moment(props.startDate);
  const end = props.endDate ? moment(props.endDate) : moment();

  const months = end.diff(start, 'years');
  const time = `${months} year${months === 1 ? '' : 's'}`;

  return (
      <div className="experience-pin">
        <div className="timeline relative">
          <div className="timeline__head z-5 translate-y-3 sticky top-18"/>
        </div>
        <div>
          <div className="z-5 sticky top-18 py-3 mb-1 bg-(--background)">
            <h3 className="text-2xl font-bold mb-0">{props.title}</h3>
          </div>
          <div className="flex flex-wrap gap-4 relative">
            <Tag>
              <Building className="stroke-accent-500"/>
              {props.company}
            </Tag>
            <Tag>
              <MapPin className="stroke-accent-500"/>
              {props.jobType}
            </Tag>
            <Tag>
              <Clock className="stroke-accent-500"/>
              {time}
            </Tag>
            <Tag>
              <Clock className="stroke-accent-500"/>
              {props.location}
            </Tag>
          </div>
          <Panel className="mt-6">
            {props.summary}
          </Panel>
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