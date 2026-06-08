"use client";
import {PassionsType} from '@/content/types';
import {AnimatedComment} from '@/components/lib/comment';
import Statement from '@/components/lib/statement';
import Container from '@/components/lib/container';
import "./styles.css";
import {motion} from 'framer-motion';
import {AnimatedHeading} from '@/components/lib/heading';
import Icons from '@/components/lib/icons';

export default function Passions(props: PassionsType) {
  const {title, comment, passions, statement} = props;
  return (
      <div className="passions" id="passions">
        <Container className="pt-40">
          <AnimatedComment whileInView={{opacity: 1, y: 0}} initial={{y: 20, opacity: 0}}>{comment}</AnimatedComment>
          <AnimatedHeading whileInView={{opacity: 1, y: 0}} initial={{y: 20, opacity: 0}} as="h2"
                           className="text-4xl">{title}</AnimatedHeading>
          <Statement>{statement}</Statement>
          <div className="passions-grid">
            {
              passions.map((passion, index) => (
                  <motion.div whileInView={{opacity: 1, y: 0}} initial={{y: 20, opacity: 0}}
                              transition={{delay: index * .1}} viewport={{once: true}}
                              className="passion-card" key={index}>
                    <div className="card-image" style={{backgroundImage: `url(${passion.image.src})`}}/>
                    <div className="card-content">
                      <h3 className="text-xl flex gap-3 items-center"><Icons name={passion.icon}/> {passion.title}</h3>
                      <p className="bio">{passion.bio}</p>
                    </div>
                  </motion.div>
              ))
            }
          </div>
        </Container>
      </div>
  );
}