"use client";

import {ExperiencePinType} from '@/content/types';
import LinkButton from '@/components/link-button';
import Tag from '@/components/tag';
import {Building, ChevronRight, Clock, Globe, MapPin} from 'lucide-react';
import moment from 'moment';
import Expandable from '@/components/expandable';
import {useInView} from 'framer-motion';
import {useRef} from 'react';
import clsx from 'clsx';

export default function ExperiencePin(props: ExperiencePinType) {
  const ref = useRef(null);
  const start = moment(new Date(props.startDate));
  const end = props.endDate ? moment(new Date(props.endDate)) : moment();
  const months = end.diff(start, 'years');
  const time = Number.isNaN(months) ? 'On-going' : `${months} year${months === 1 ? '' : 's'}`;

  const active = useInView(ref, {
    margin: `0px 0px -${window.innerHeight - 92}px 0px` as keyof object,
  });



  return (
      <div className="experience-pin">
        <div className="timeline relative">
          {/*@ts-ignore*/}
          <div ref={ref} className={clsx('experience-brand', active && 'dark:bg-accent-500 bg-accent-500 text-white')}>
            {props.brand}
          </div>
        </div>
        <div>
          <div className="z-5 sticky top-18 mt-2 py-3 mb-1 bg-(--background)">
            <h3 className={clsx("font-bold mb-0 transition-all min-h-12",active  ? "text-xl mt-2" : "text-2xl")}>{props.title}</h3>
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

          <Expandable header={props.summary}>

            <ul className="mt-3 flex gap-2 flex-col">
              {
                props.contributions?.map((contribution, index) => (
                    <li className="flex gap-1 mb-2 items-center" key={index}>
                      <span><ChevronRight className="stroke-accent-500 w-fit"/></span>
                      {contribution}
                    </li>
                ))
              }
            </ul>
          </Expandable>
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