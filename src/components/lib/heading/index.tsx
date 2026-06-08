"use client";
import {PropsWithChildren, Ref, useMemo} from 'react';
import {motion} from 'framer-motion';
import {Transition} from 'motion';
import clsx from 'clsx';

export interface TitleProps extends PropsWithChildren {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  ref?: Ref<HTMLHeadingElement>;
  transition?: Transition
}

export default function Heading(props: TitleProps) {
  const {as, ref, className} = props;
  const Title = useMemo(() => {
    return motion[as];
  }, [props.as]);

  return (
      <Title
          ref={ref}
          className={clsx('text-3xl font-semibold', className)} whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: 10}}
             transition={props.transition}
             viewport={{once: true}}>{props.children}</Title>
  );
}

export const AnimatedHeading = motion(Heading);