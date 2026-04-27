"use client";
import "./index.css";
import Icon from '@/components/lib/icon';
import Button from '@/components/lib/button';
import {motion} from "framer-motion";
import {useState} from 'react';
import Statement from '@/components/lib/statement';
import {PanInfo} from 'motion-dom';
import clsx from 'clsx';

const useCases = {
  "Languages": "JavaScript: – I love its simplicity, my little [object] dummy 😅\n CSS3: Truly love its API, and I think",
  "Frontend": "Built SSG, ICR with NextJS, since 2021.",
};

const stack = {
  "Languages": [
    'JavaScript',
    'TypeScript',
    'HTML5',
    'CSS3',
    'Rust',
  ],
  "Frontend": [
    'React',
    'Next',
    'Vue',
    'Redux',
    'Tailwind CSS',
    'React Router',
  ],
  "Backend": [
    'Node',
    'Bun',
    'tRPC',
    'Express',
    'Nest',
    'MySQL',
    'Drizzle'
  ],
  "Infra & DevOps": [
    'Docker',
    "Github",
    "Bitbucket",
    "Google Cloud",
    'Github Actions',
  ],
  "Tools": [
    'Figma',
    'Adobe Illustrator',
    "Webstorm",
    'Photoshop'
  ]
} as const;

type StackKey = keyof typeof stack;

const stackKeys = [...Object.keys(stack)];

export default function TechStack() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  const TIMER_DURATION = 4000; // ms
  const total = stackKeys.length;

  const wrapIndex = (next: number) => {
    if (next < 0) return total - 1;
    if (next >= total) return 0;
    return next;
  };

  const frames = Object.keys(stack).map((key, index) => {
    let delta = index - active;

    // wrap delta to shortest circular distance
    if (delta > total / 2) delta -= total;
    if (delta < -total / 2) delta += total;

    const distance = Math.abs(delta);
    const offset = 0.13;

    const offsetValue = delta * 30;

    return {
      key: key as keyof typeof stack,
      isActive: index === active,
      distance,
      offsetValue,
      z: total - distance,
      scale: 1 - offset * distance,
      index,
    };
  });

  const handleDragEnd = (_: any, info: PanInfo) => {
    const offset = isMobile ? info.offset.x : info.offset.y;
    const velocity = isMobile ? info.velocity.x : info.velocity.y;
    const threshold = 60;
    if (offset < -threshold || velocity < -500) {
      setActive((prev) => wrapIndex(prev + 1));
    } else if (offset > threshold || velocity > 500) {
      setActive((prev) => wrapIndex(prev - 1));
    }
  };

  const handleClick = (originalIndex: number) => {
    return () => {
      if (originalIndex !== active) {
        setActive(originalIndex);
      }
    };
  };


  return (
        <div className="tech-stack">
          <div className="tech-stack__controllers">
            <div className="top-0 left-0 w-full h-1 bg-(--bg-default-800) overflow-hidden">
              <motion.div
                  key={active}
                  className="h-full bg-gray-600 origin-center"
                  initial={{scaleX: 1}}
                  animate={{scaleX: isPaused ? 1 : 0}}
                  transition={{
                    duration: TIMER_DURATION / 1000,
                    ease: "linear",
                  }}
                  onAnimationComplete={() => {
                    if (!isPaused) {
                      setActive((prev) => wrapIndex(prev + 1));
                    }
                  }}
              />
            </div>
            {
              Object.keys(stack).map((key, index) => (
                      <Button key={key} variant="secondary" disabled={active === index} active={active === index}
                              onClick={() => {
                                setActive(index);
                              }}>
                        <Icon name="github"/>
                        {key}
                      </Button>
                  )
              )
            }
          </div>
          <div
              className="stack relative"
          >
            {
              frames.map(({offsetValue, z, scale, key, index: originalIndex}) => {
                return (
                    <motion.div
                        key={key}
                        initial={false}
                        animate={{
                          scale,
                          zIndex: z,
                          x: isMobile ? offsetValue : 0,
                          y: isMobile ? 0 : offsetValue,
                        }}
                        drag={originalIndex === active ? (isMobile ? "x" : "y") : false}
                        dragElastic={0.2}
                        dragSnapToOrigin={true}
                        onDragEnd={handleDragEnd}
                        onClick={handleClick(originalIndex)}
                        className={clsx('stack__card', originalIndex !== active ? 'blur-[2px]' : '')}
                        style={{
                          cursor: originalIndex === active ? 'grab' : 'pointer',
                          touchAction: 'pan-x pan-y',
                        }}
                    >
                      <div className="stack__card__header">
                        <Icon name="github"/>
                        <h4 className="font-bold">{key}</h4>
                      </div>
                      <Statement className="stack__card__body">
                        {useCases[key as keyof object] ?? "No content to be displayed."}
                      </Statement>
                      <ul className="stack__card__tags">
                        {
                          stack[key as StackKey].map((skill) => (
                              <li key={skill} className="stack__card__skill">
                                {skill}
                              </li>
                          ))
                        }
                      </ul>
                    </motion.div>
                );
              })
            }
          </div>
        </div>
  );
}