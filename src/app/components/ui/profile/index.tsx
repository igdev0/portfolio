import Comment from '@/app/components/lib/comment';
import Container from '@/app/components/lib/container';
import AppText from '@/app/components/lib/text';
import root from '@/app/components/lib/box';
import Box from '@/app/components/lib/box';
import {profile} from '@/config/content/profile';
import Html from '@/app/components/lib/html';
import Statement from '@/app/components/lib/statement';
import Button from '@/app/components/lib/button';

export default function Profile() {
  return (
      <Container>
        <root.div className="profile pt-40">
          <Comment className="mb-4">
            {profile.tag.value}
          </Comment>
          <AppText as="h2" className="mb-10" size="4xl" weight="bold">
            {profile.title.value}
          </AppText>
          <Html className="text-(--fg-story)">
            {profile.bio.value}
          </Html>
        </root.div>
        <root.div className="mt-20" initial={{transform: 'translateY(2rem)', opacity: 0}} whileInView={{opacity: 1, transform: 'translateY(0)'}}>
          <AppText as="h3" size="3xl" weight="bold">
            {profile.stack.title.value}
          </AppText>
          <Statement>
            {profile.stack.statement.value}
          </Statement>
        </root.div>
        <Box.div>
          <Button icon="github" variant="secondary" disabled={false}>
            PRO Languages
          </Button>
        </Box.div>
      </Container>
  );
}