"use client";
import Comment from '@/components/lib/comment';
import Container from '@/components/lib/container';
import Box from '@/components/lib/box';
import {profile} from '@/content/profile';
import Html from '@/components/lib/html';
import Statement from '@/components/lib/statement';
import TechStack from '@/components/lib/tech-stack';
import {TechStackProvider} from '@/components/lib/tech-stack/context';

interface ProfileProps {
  data: typeof profile;
}

export default function Profile(props: ProfileProps) {
  const {data} = props;

  return (
      <Container id="profile">
        <Box as="div" className="profile pt-40">
          <Comment className="mb-4">
            {data.tag.value}
          </Comment>
          <h2 className="text-4xl font-bold mb-10">
            {data.title.value}
          </h2>
          <Html className="text-(--fg-story)">
            {data.bio.value}
          </Html>
        </Box>
        <Box as="div" className="mt-20 mb-8">
          <h3 className="text-3xl font-bold">
            {data.stack.title.value}
          </h3>
          <Statement>
            {data.stack.statement.value}
          </Statement>
        </Box>
        <TechStackProvider data={data.stack.tech}>
          <TechStack />
        </TechStackProvider>
      </Container>
  );
}