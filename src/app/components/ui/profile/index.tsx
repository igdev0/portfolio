import Comment from '@/app/components/lib/comment';
import Container from '@/app/components/lib/container';
import AppText from '@/app/components/lib/text';
import Box from '@/app/components/lib/box';
import {profile} from '@/config/content/profile';
import Html from '@/app/components/lib/html';
import Statement from '@/app/components/lib/statement';

export default function Profile() {
  return (
      <Container>
        <Box as="section" className="profile pt-40">
          <Comment className="mb-4">
            {profile.tag.value}
          </Comment>
          <AppText as="h2" className="mb-6" size="4xl" weight="bold">
            {profile.title.value}
          </AppText>
          <Html className="text-(--fg-story)">
            {profile.bio.value}
          </Html>
        </Box>

        <Box className="pt-20">
          <AppText as="h3" size="3xl" weight="bold">
            {profile.stack.title.value}
          </AppText>
          <Statement>
            {profile.stack.statement.value}
          </Statement>
        </Box>
      </Container>
  );
}