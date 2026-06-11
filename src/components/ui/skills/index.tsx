"use client";
import Container from '@/components/lib/container';
import Box from '@/components/lib/box';
import Statement from '@/components/lib/statement';
import TechStack from '@/components/lib/tech-stack';
import {TechStackProvider} from '@/components/lib/tech-stack/context';
import {SkillsType} from '@/content/types';
import {AnimatedComment} from '@/components/lib/comment';
import Stack from '@/components/lib/stack';

export default function Skills(props: SkillsType) {
  const {title, comment, skills, statement} = props;

  return (
      <Container id="skills">
        <Box as="div" className="pt-40 mb-8">
          <AnimatedComment whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: 20}}>{comment}</AnimatedComment>
          <h2 className="text-4xl font-bold">
            {title}
          </h2>
          <Statement>
            {statement}
          </Statement>
        </Box>
        <TechStackProvider data={skills}>
          <TechStack/>
        </TechStackProvider>
        <Stack.Root>
          <Stack.Controllers>
            {
              Object.entries(skills).map(([skill, entry], index) => (
                  <Stack.Controller key={skill} id={skill}>
                    {skill}
                  </Stack.Controller>
              ))
            }
          </Stack.Controllers>
          <Stack.Cards>
            {
              Object.entries(skills).map(([skill, entry], index) => (
                  <Stack.Card key={skill} id={skill}>
                    {skill}
                  </Stack.Card>
              ))
            }
          </Stack.Cards>
        </Stack.Root>
      </Container>
  );
}