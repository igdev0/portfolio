import Comment from '@/app/components/lib/comment';
import Container from '@/app/components/lib/container';
import AppText from '@/app/components/lib/text';

export default function Profile() {
  return (
      <Container>
        <section className="profile pt-40">
          <Comment>
            // Profile
          </Comment>
          <AppText size="4xl" weight="bold">
            About
          </AppText>
        </section>
      </Container>
  );
}