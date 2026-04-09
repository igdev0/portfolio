import Comment from '@/app/components/lib/comment';
import Container from '@/app/components/lib/container';
import AppText from '@/app/components/lib/text';
import Box from '@/app/components/lib/box';
import {profile} from '@/config/content/profile';
import Html from '@/app/components/lib/html';

export default function Profile() {
  return (
      <Container>
        <Box as="section" className="profile pt-40">
          <Comment className="mb-3">
            {profile.tag.value}
          </Comment>
          <AppText className="mb-6" size="4xl" weight="bold">
            {profile.title.value}
          </AppText>
          <Html className="mt-4 text-(--fg-story)">
            {profile.bio.value}
          </Html>
        </Box>
      </Container>
  );
}