"use client";
import Comment from '@/app/components/lib/comment';
import Container from '@/app/components/lib/container';
import AppText from '@/app/components/lib/text';
import Box from '@/app/components/lib/box';
import {profile} from '@/config/content/profile';
import Html from '@/app/components/lib/html';
import Statement from '@/app/components/lib/statement';
import Button from '@/app/components/lib/button';
import {useState} from 'react';
import clsx from 'clsx';
import {motion} from 'framer-motion';

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


export default function Profile() {
  const [active, setActive] = useState<StackKey>('Frontend');

  return (
      <Container>
        <Box as="div" className="profile pt-40">
          <Comment className="mb-4">
            {profile.tag.value}
          </Comment>
          <AppText as="h2" className="mb-10" size="4xl" weight="bold">
            {profile.title.value}
          </AppText>
          <Html className="text-(--fg-story)">
            {profile.bio.value}
          </Html>
        </Box>
        <Box as="div" className="mt-20">
          <Box className="text-3xl font-bold" as="h3">
            {profile.stack.title.value}
          </Box>
          <Statement>
            {profile.stack.statement.value}
          </Statement>
        </Box>
        <Box className="grid grid-cols-2 gap-3">
          <Box className="grid grid-cols-1 gap-3">
            {
              Object.keys(stack).map((key) => {
                const isActive = key === active;
                return (
                    <Button key={key}
                            icon="github"
                            variant="secondary"
                            disabled={isActive}
                            onClick={() => setActive(key as StackKey)}
                    >
                      {key}
                    </Button>
                );
              })
            }
          </Box>
          <Box className="flex justify-end">
            <Box className="relative size-80 perspective-far transform-3d">
              {
                Object.keys(stack).map((key, index) => {
                  const isActive = key === active;
                  return (
                      <motion.div key={key}
                                  initial={{
                                    translateX: !isActive ? `-${index}rem` : 0,
                                    translateY: !isActive ? `-${index}rem` : 0,
                                    filter: !isActive ? 'blur(3px) opacity(.8)' : 'blur(0)',
                                    translateZ: isActive ? '5rem' : '0rem',
                                  }}
                                  animate={{
                                    translateX: !isActive ? `-${index}rem` : 0,
                                    translateY: !isActive ? `${index}rem` : 0,
                                    filter: !isActive ? 'blur(3px) opacity(.8)' : 'blur(0)',
                                    translateZ: isActive ? '4rem' : '0rem'
                                  }}
                                  className={clsx(`w-full p-2 border border-default-400 flex items-end justify-stat flex-wrap gap-2 h-full absolute rounded-md bg-accent-50 left-0 top-0 right-0 bottom-0`)}>

                        {Object.values(stack[key as keyof typeof stack]).map(skill => (
                            <Box className="p-2 border inline-block border-accent-200 h-fit rounded-sm" key={skill}>
                              {skill}
                            </Box>
                        ))}
                      </motion.div>
                  );
                })
              }
            </Box>
          </Box>
        </Box>
      </Container>
  );
}