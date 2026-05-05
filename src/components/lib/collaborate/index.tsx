import Container from '@/components/lib/container';
import Comment from '@/components/lib/comment';
import Statement from '@/components/lib/statement';
import {CollaborateType} from '@/content/collaborate';

interface CollaborateProps {
  data: CollaborateType;
}

export default function Collaborate(props: CollaborateProps) {
  const {data} = props;
  return (
      <Container className="pt-40">
        <Comment>
          {data.comment}
        </Comment>
        <h1 className="text-4xl font-bold">{data.title}</h1>
        <Statement>
          {data.statement}
        </Statement>
      </Container>
  )
}