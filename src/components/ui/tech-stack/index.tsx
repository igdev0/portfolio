"use client";
import "./index.css";
import Icon from '@/components/lib/icon';
import Button from '@/components/lib/button';
import {motion} from "framer-motion";
import {useEffect, useState} from 'react';
import Statement from '@/components/lib/statement';

const useCases = {
  "React": "Built single page web apps with React since 2020.",
  "NextJS": "Built SSG, ICR with NextJS, since 2021.",
};

const stack = {
  "PRO languages": [
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
    'tailwindcss',
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
  "Infrastructure": [
    'Docker',
    'Github Actions',
  ],
  "Tools": [
    'Figma',
    'Adobe Illustrator',
    'Photoshop'
  ]
} as const;

type StackKey = keyof typeof stack;

const stackKeys = [...Object.keys(stack)];

export default function TechStack() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 50rem)');

    const update = () => setIsMobile(media.matches);
    update();

    media.addEventListener?.('change', update);
    return () => media.removeEventListener?.('change', update);
  }, []);

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
    const offset = 0.1;

    const offsetValue = delta * 30;

    return {
      key: key as keyof typeof stack,
      isActive: index === active,
      distance,
      x: isMobile ? offsetValue : 0,
      y: isMobile ? 0 : offsetValue,
      z: total - distance,
      scale: 1 - offset * distance,
      index,
    };
  });

  return (
      <div className="tech-stack">
        <div className="tech-stack__controllers">
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
        <div className="stack">
          {
            frames.map(({ x, y, z, scale, key, index: originalIndex }) => {
              return (
                  <motion.div
                      initial={false}
                      animate={{
                        x,
                        y,
                        scale,
                        zIndex: z,
                      }}
                      drag={originalIndex === active ? (isMobile ? "x" : "y") : false}
                      dragElastic={0.2}
                      onDragEnd={(_, info) => {
                        const offset = isMobile ? info.offset.x : info.offset.y;
                        const velocity = isMobile ? info.velocity.x : info.velocity.y;
                        const threshold = 60;
                        if (offset < -threshold || velocity < -500) {
                          setActive((prev) => wrapIndex(prev + 1));
                        } else if (offset > threshold || velocity > 500) {
                          setActive((prev) => wrapIndex(prev - 1));
                        }
                      }}
                      dragSnapToOrigin={true}
                      onClick={() => {
                        if (originalIndex !== active) {
                          setActive(originalIndex);
                        }

                        console.log("Clicked")
                      }}
                      onTap={() => {
                        if (originalIndex !== active) {
                          setActive(originalIndex);
                        }
                      }}
                      className="stack__card"
                      key={key}
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
                      Been developing frontend web apps since 20216
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
              )
            })
          }
        </div>
      </div>
  );
}