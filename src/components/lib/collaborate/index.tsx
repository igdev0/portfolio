import Container from '@/components/lib/container';
import Comment from '@/components/lib/comment';
import Statement from '@/components/lib/statement';
import {CollaborateType} from '@/content/types';
import LinkButton from '@/components/lib/link-button';
import "./index.css";
import BasicMessage from '@/features/basic-message';
import Heading from '@/components/lib/heading';

export default function Collaborate(props: CollaborateType) {
  const {contact, comment, title, statement} = props;
  return (
      <Container className="pt-40 pb-4" id="message">
        <Comment>
          {comment}
        </Comment>
        <Heading as="h2">{title}</Heading>
        <Statement className="mb-12">
          {statement}
        </Statement>
        <div className="max-w-120 gap-6 w-full mb-4">
          <BasicMessage book={{href: contact.calendly, text: "Book a call"}}/>
        </div>

        <div className="flex gap-4 w-fit">
          <LinkButton icon="github" size="xs" href={contact.github} aspect="square" external
                      variant="outline"
                      className="w-fit"/>
          <LinkButton icon="telegram" size="xs" href={contact.telegram} aspect="square" external
                      variant="outline"
                      className="w-fit"/>
          <LinkButton icon="linkedin" size="xs" href={contact.linkedin} aspect="square" external
                      variant="outline"
                      className="w-fit"/>
          <LinkButton icon="email" size="xs" href={contact.email} aspect="square" external
                      variant="outline"
                      className="w-fit"/>
        </div>
      </Container>
  );
}