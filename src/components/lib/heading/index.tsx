import {PropsWithChildren, useMemo} from 'react';
import {motion} from 'framer-motion';
import {Transition} from 'motion';

export interface TitleProps extends PropsWithChildren {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  transition?: Transition
}

export default function Heading(props: TitleProps) {
  const {as, className} = props;
  const Title = useMemo(() => {
    return motion[as];
  }, [props.as]);

  return (
      <Title className={className} whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: 10}}
             transition={props.transition}
             viewport={{once: true}}>{props.children}</Title>
  );
}