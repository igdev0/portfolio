import {PassionsType} from '@/content/types';
import Comment from '@/components/comment';
import Statement from '@/components/statement';
import Container from '@/components/container';
import "./styles.css";
import Heading from '@/components/heading';
import PassionCard from '@/components/passions/card';

export default function Passions(props: PassionsType) {
  const {title, comment, passions, statement} = props;
  return (
      <div className="passions" id="passions">
        <Container className="pt-40">
          <Comment>{comment}</Comment>
          <Heading as="h2"
                   className="text-4xl">{title}</Heading>
          <Statement>{statement}</Statement>
          <div className="passions-grid items-center">
            {
              passions.map((passion, index) => (
                  <PassionCard {...passion} index={index} key={index}/>
              ))
            }
          </div>
        </Container>
      </div>
  );
}