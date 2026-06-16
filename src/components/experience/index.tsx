import Comment from '@/components/comment';
import Container from '@/components/container';
import Statement from '@/components/statement';
import {ExperienceTimelineType} from '@/content/types';
import Heading from '@/components/heading';
import ExperiencePin from '@/components/experience/pin';
import "./index.css";


export default function Experience(props: ExperienceTimelineType) {
  const {comment, title, statement, roles} = props;
  return (
      <Container className="pt-40" id="experience">
        <Comment>{comment}</Comment>
        <Heading as="h2">{title}</Heading>
        <Statement className="mb-6">
          {statement}
        </Statement>
        <div className="relative flex flex-col mt-16 gap-12">
          <div
              className="border-l-2 top-3.5 border-(--grid) border-dashed h-[99%] w-0 left-0 translate-x-2.5 absolute"/>

          {
            roles.map((experience, index) => (
                <ExperiencePin key={index} {...experience}/>
            ))
          }
        </div>
      </Container>
  );
}