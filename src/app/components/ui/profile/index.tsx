import Comment from '@/app/components/lib/comment';
import Container from '@/app/components/lib/container';
import Title from '@/app/components/lib/title';

export default function Profile() {
  return (
      <Container>
        <section className="profile pt-40">
          <Comment>
            // Profile
          </Comment>
          <Title size="4xl" weight="bold">
            About
          </Title>
        </section>
      </Container>
  );
}