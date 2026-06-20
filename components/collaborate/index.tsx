import Container from '@/components/container';
import Comment from '@/components/comment';
import Statement from '@/components/statement';
import {CollaborateType} from '@/content/types';
import "./index.css";
import BasicMessage from '@/components/basic-message';
import Heading from '@/components/heading';

export default function Collaborate(props: CollaborateType) {
  const {contact, comment, title, statement} = props;
  return (
      <Container className="pt-40" id="message">
        <Comment>
          {comment}
        </Comment>
        <Heading as="h2">{title}</Heading>
        <Statement className="mb-16">
          {statement}
        </Statement>
        <div className="max-w-120 gap-6 w-full">
          <BasicMessage book={{href: contact.calendly, text: "Book a call"}}/>
        </div>
      </Container>
  );
}