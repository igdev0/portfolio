"use client";

import {ExperiencePinType} from '@/content/types';
import Tag from '@/components/tag';
import {ArrowRight, AtSignIcon, Building, Calendar, ChevronRight, Clock, Globe, ImageIcon, MapPin} from 'lucide-react';
import moment from 'moment';
import Expandable from '@/components/expandable';
import {motion, useScroll} from 'motion/react';
import {useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import Link from 'next/dist/client/link';
import Github from '@/components/icons/github';
import Image from 'next/image';

export default function ExperiencePin(props: ExperiencePinType) {
  const ref = useRef<HTMLDivElement>(null);
  const start = moment(new Date(props.startDate));
  const end = props.endDate ? moment(new Date(props.endDate)) : moment();
  const months = end.diff(start, 'years');
  const time = `${months} year${months === 1 ? '' : 's'}`;

  const {scrollY} = useScroll();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const update = () => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      setActive(rect.top <= 86);
    };

    update();
    const unsubscribe = scrollY.on("change", update);

    return () => unsubscribe();
  }, [scrollY]);


  return (
      <div className="experience-pin">
        <div className="timeline relative">
          {/*@ts-ignore*/}
          <div ref={ref} className={clsx('experience-brand top-21', active && 'bg-accent-500 text-white')}>
            {props.brand}
          </div>
        </div>
        <div>
          <div className="sticky top-21 py-3 bg-(--background) z-1">
            <div className="w-full h-20 absolute -top-10 bg-(--background) -z-1"/>
            <h3 className={clsx("font-bold mb-0 transition-all text-lg md:text-2xl ")}>{props.title}</h3>
          </div>
          <div className="flex flex-wrap gap-1.5 md:gap-3 z-2 mt-1">
            <Tag>
              <Building className="stroke-accent-500" size={20}/>
              {props.company}
            </Tag>
            <Tag>
              <MapPin className="stroke-accent-500" size={20}/>
              {props.jobType}
            </Tag>
            <Tag id="duration" tooltipPopup={
              <div className="flex gap-2 items-center">
                <Calendar className="stroke-accent-500" size={15}/>{moment(new Date(props.startDate)).format('MMM yyyy')}
                <ArrowRight className="stroke-accent-500" size={15}/>
                {props.endDate ? moment(new Date(props.endDate)).format('MMM yyyy') : "Now"}
              </div>
            }>
              <Clock className="stroke-accent-500" size={20}/>
              {time}
            </Tag>
            <Tag id="location" tooltipPopup={
              props.country
            }>
              <Globe className="stroke-accent-500" size={20}/>
              {props.city}
            </Tag>
          </div>
          <Expandable header={props.summary}>
            <ul className="mt-3 flex gap-1 flex-col">
              {
                props.contributions?.map((contribution, index) => (
                    <li className="flex gap-1 items-center" key={index}>
                      <span><ChevronRight className="stroke-accent-500 w-fit"/></span>
                      {contribution}
                    </li>
                ))
              }
            </ul>
          </Expandable>
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-3 md:gap-6 mt-3 md:mt-6 mb-0 w-full">
            {
              props.projects.map((project, index) => {
                const cardHref = project.repositoryUrl ?? project.appUrl;
                return (
                    <motion.div whileInView={{opacity: 1}} initial={{opacity: 0}} viewport={{once: true}}
                                transition={{delay: index / 3}} className="panel h-fit p-0" key={index}>
                        <Link href={cardHref ?? "#"} target="_blank" className="project-header">
                          {!project.imageSrc ? <ImageIcon/> :
                              <Image className="h-fit w-fit p-2" src={project.imageSrc}
                                     alt={project.imageAlt ?? "Alt"} width={100}
                                     height={100}/>
                          }
                          <div className="absolute top-0 left-0 w-full h-full bg-accent-100/80 dark:bg-gray-700/80"/>
                        </Link>
                      <div className="px-3">
                        <div className="flex gap-1 items-center">
                          <h4 className="text-md font-bold mb-1 dark:text-accent-100 text-gray-900">{project.name}</h4>
                          <AtSignIcon size={15} className="dark:stroke-accent-300 stroke-accent-500 -translate-y-0.5"/>
                          <span className="text-sm -translate-y-0.5 dark:text-accent-300 text-accent-500">{project.owner}</span>
                        </div>
                        <p className="text-sm dark:text-foundation-400 text-gray-600 pb-1">{project.summary}</p>
                        <div className="flex gap-1 flex-wrap mt-2">
                          {
                            project.tech.map((tech, index) => (
                                <span className="text-xs px-2 py-1 bg-accent-100 dark:bg-foundation-700 rounded-full" key={index}>{tech}</span>
                            ))
                          }
                        </div>
                        <div className="flex gap-3 justify-end mt-3 mb-3">
                          {project.repositoryUrl &&
                              <Link className="flex-1 max-w-6" target="_blank"
                                    href={project.repositoryUrl}><Github/></Link>}
                          {project.appUrl &&
                              <Link className="flex-1 max-w-6" target="_blank" href={project.appUrl}><Globe/></Link>}
                        </div>
                      </div>
                    </motion.div>
                );
              })
            }
          </div>
        </div>
      </div>
  );
}