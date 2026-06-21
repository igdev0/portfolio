import {SectionType} from '@/content/types';
import Container from '@/components/container';
import Heading from '@/components/heading';
import Comment from '@/components/comment';
import {PropsWithChildren} from 'react';
import Statement from '@/components/statement';

export default function Section(props: PropsWithChildren & SectionType) {
  return (
      <Container>
        <Comment className="mt-36">
          {props.comment}
        </Comment>
        <Heading
            as="h2"
            className="text-4xl 6xl:text-6xl mb-6 font-bold">{props.title}</Heading>
        <Statement className="mb-12">
          {props.statement??""}
        </Statement>
        {
          props.children
        }
      </Container>
  );
}