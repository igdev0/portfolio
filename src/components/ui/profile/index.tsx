"use client";
import Comment from '@/components/lib/comment';
import Container from '@/components/lib/container';
import Box from '@/components/lib/box';
import {profile} from '@/config/content/profile';
import Html from '@/components/lib/html';
import Statement from '@/components/lib/statement';
import TechStack from '@/components/ui/tech-stack';


export default function Profile() {

  return (
      <Container>
        <Box as="div" className="profile pt-40">
          <Comment className="mb-4">
            {profile.tag.value}
          </Comment>
          <h2 className="text-4xl font-bold mb-10">
            {profile.title.value}
          </h2>
          <Html className="text-(--fg-story)">
            {profile.bio.value}
          </Html>
        </Box>
        <Box as="div" className="mt-20 mb-8">
          <h3 className="text-3xl font-bold">
            {profile.stack.title.value}
          </h3>
          <Statement>
            {profile.stack.statement.value}
          </Statement>
        </Box>
        <TechStack/>
      </Container>
  );
}