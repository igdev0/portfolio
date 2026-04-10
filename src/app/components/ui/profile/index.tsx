"use client";
import Comment from '@/app/components/lib/comment';
import Container from '@/app/components/lib/container';
import Box from '@/app/components/lib/box';
import {profile} from '@/config/content/profile';
import Html from '@/app/components/lib/html';
import Statement from '@/app/components/lib/statement';
import TechStack from '@/app/components/lib/tech-stack';


export default function Profile() {

  return (
      <Container>
        <Box as="div" className="profile pt-40 ">
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