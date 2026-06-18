"use client";

import {ExperiencePinType} from '@/content/types';
import Tag from '@/components/tag';
import {Building, ChevronRight, Clock, Globe, ImageIcon, MapPin} from 'lucide-react';
import moment from 'moment';
import Expandable from '@/components/expandable';
import {useInView} from 'framer-motion';
import {useRef} from 'react';
import clsx from 'clsx';
import Link from 'next/dist/client/link';
import Github from '@/components/icons/github';
import Image from 'next/image';

export default function ExperiencePin(props: ExperiencePinType) {
  const ref = useRef(null);
  const start = moment(new Date(props.startDate));
  const end = props.endDate ? moment(new Date(props.endDate)) : moment();
  const months = end.diff(start, 'years');
  const time = Number.isNaN(months) ? 'On-going' : `${months} year${months === 1 ? '' : 's'}`;

  const active = useInView(ref, {
    margin: `0px 0px -90% 0px` as keyof object,
    amount: 0.5,
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
            <h3 className={clsx("font-bold mb-0 transition-all min-h-12", active ? "text-xl mt-2" : "text-2xl")}>{props.title}</h3>
          </div>
          <div className="flex flex-wrap gap-3 relative">
            <Tag>
              <Building size={20}/>
              {props.company}
            </Tag>
            <Tag>
              <MapPin size={20}/>
              {props.jobType}
            </Tag>
            <Tag>
              <Clock size={20}/>
              {time}
            </Tag>
            <Tag>
              <Globe size={20}/>
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6 mb-0 w-full">
            {
              props.projects.map((project, index) => (
                  <div className="panel h-fit p-0" key={index}>
                    {

                      <div className="project-header">
                        {!project.imageSrc ? <ImageIcon/> :
                            <Image className="h-fit w-fit p-2" src={project.imageSrc} alt={project.imageAlt ?? "Alt"} width={100} height={100}/>}
                        <div className="absolute top-0 left-0 w-full h-full bg-accent-100/80 dark:bg-gray-700/80"/>
                      </div>
                    }
                    <div className="px-3">
                      <h4 className="text-md font-bold mb-1 dark:text-accent-100 text-gray-900">{project.name}</h4>
                      <p className="text-sm">{project.summary}</p>
                      <div className="flex gap-3 justify-end mt-3 mb-3">
                        {project.repositoryUrl &&
                            <Link className="flex-1 max-w-6" target="_blank" href={project.repositoryUrl}><Github/></Link>}
                        {project.appUrl && <Link className="flex-1 max-w-6" target="_blank" href={project.appUrl}><Globe/></Link>}
                      </div>
                    </div>
                  </div>
              ))
            }
          </div>
        </div>
      </div>
  );
}