"use client";
import Box from '@/app/components/lib/box';
import "./index.css";
import Icon from '@/app/components/lib/icon';

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
  "DevOps": [
    'Docker',
    'Github Actions',
  ]
} as const;

type StackKey = keyof typeof stack;

type RelationPath = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}
export default function TechStack() {

  return (
      <div className="tech-stack">
        <Box className="grid grid-cols-3 gap-3">
          {
            Object.keys(stack).map((key, index) => {
              return (
                  <div className="tech-stack__card" key={key}>
                    <div className="tech-stack__card__header">
                      <Icon name="github"/>
                      <h4 className="font-bold">{key}</h4>
                    </div>
                    <ul className="tech-stack__card__body">
                      {
                        stack[key as StackKey].map((skill) => (
                            <li key={skill} className="tech-stack__card__body__skill">
                              {skill}
                            </li>
                        ))
                      }
                    </ul>
                  </div>
              );
            })
          }
        </Box>
      </div>
  );
}