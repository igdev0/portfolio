import {ExperiencePinType} from '@/content/types';
import LinkButton from '@/components/link-button';
import Tag from '@/components/tag';
import {Building, ChevronDown, ChevronRight, Clock, Globe, MapPin, ScanText} from 'lucide-react';
import Panel from '@/components/panel';
import moment from 'moment';
import {Collapsible} from '@base-ui/react';

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
          <div className="flex flex-wrap gap-3 relative">
            <Tag>
              <Building/>
              {props.company}
            </Tag>
            <Tag>
              <MapPin/>
              {props.jobType}
            </Tag>
            <Tag>
              <Clock/>
              {time}
            </Tag>
            <Tag>
              <Globe/>
              {props.location}
            </Tag>
          </div>


          <Collapsible.Root>
            <Panel className="mt-6">
              <Collapsible.Trigger className="text-left flex flex-col cursor-pointer">
                <div className="flex gap-3">
                  <span>
                    <ScanText/>
                  </span>
                  <p>{props.summary}</p>
                </div>
                <ChevronDown className="stroke-accent-500 self-center mt-2"/>
              </Collapsible.Trigger>
              <Collapsible.Panel hiddenUntilFound={true} className="flex h-(--collapsible-panel-height) flex-col justify-end overflow-hidden text-sm transition-[height] duration-150 ease-[ease-out] [&[hidden]:not([hidden='until-found'])]:hidden data-ending-style:h-0 data-starting-style:h-0">
                <ul className="mt-3">
                  {
                    props.contributions?.map((contribution, index) => (
                        <li className="flex gap-1 mb-2 items-center" key={index}>
                          <span><ChevronRight className="stroke-accent-500 w-fit"/></span>
                          {contribution}
                        </li>
                    ))
                  }
                </ul>
              </Collapsible.Panel>
            </Panel>
          </Collapsible.Root>
          <div className="flex flex-wrap gap-3 mt-6 mb-0">
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