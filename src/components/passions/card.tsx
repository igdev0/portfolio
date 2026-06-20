"use client";
import {PassionEntityType} from '@/content/types';
import {motion, useScroll, useTransform} from 'motion/react';
import Icons from '@/components/icons';

export default function PassionCard(props:PassionEntityType & {index: number}) {
  const {scrollY} = useScroll();
  const imageY = useTransform(scrollY, [0, 2000], [0, -100]);

  return (

      <motion.div whileInView={{opacity: 1, y: 0}} initial={{y: 20, opacity: 0}}
                  transition={{delay: props.index * .1}} viewport={{once: true}}
                  className="passion-card">
        <motion.div
            className="card-image"
            style={{
              backgroundImage: `url(${props.image.src})`,
              backgroundPositionY: imageY,
            }}
        />
        <div className="card-content">
          <h3 className="text-xl flex gap-3 items-center"><Icons name={props.icon}/> {props.title}</h3>
          <p className="bio">{props.bio}</p>
        </div>
      </motion.div>
  )
}