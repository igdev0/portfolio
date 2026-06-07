import {PassionsType} from '@/content/types';
import Comment from '@/components/lib/comment';
import Statement from '@/components/lib/statement';
import Image from 'next/image';
import Container from '@/components/lib/container';

export default function Passions(props: PassionsType) {
  const {title, comment, passions, statement} = props;
  return (
      <div className="passions">
        <Container>
          <Comment>{comment}</Comment>
          <h1 className="text-3xl">{title}</h1>
          <Statement>{statement}</Statement>
          <div className="passions-grid">
            {
              passions.map((passion, index) => (
                  <div className="passion-card" key={index}>
                    <Image {...passion.image}/>
                    <p>{passion.bio}</p>
                  </div>
              ))
            }
          </div>
        </Container>
      </div>
  );
}