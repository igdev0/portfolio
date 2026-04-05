import Comment from '@/app/components/lib/comment';
import Container from '@/app/components/lib/container';

export default function Profile() {
  return (
      <section className="profile">
        <Container>
          <Comment>
            Profile
          </Comment>
        </Container>
      </section>
  );
}