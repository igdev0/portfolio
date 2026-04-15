import Container from '@/app/components/lib/container';
import Comment from '@/app/components/lib/comment';
import Statement from '@/app/components/lib/statement';

/**
 * @todo Make Architecture of the App Design Studio.
 */

const contents = {
  comment: "// Build",
  title: "{Collaborate}"
}

export default function Collaborate() {
  return (
      <Container className="pt-40">
        <Comment>
          {contents.comment}
        </Comment>
        <h1 className="text-4xl font-bold">{contents.title}</h1>
        <Statement>
          Always open to work with talented teams.
        </Statement>
      </Container>
  )
}