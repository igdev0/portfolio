"use client";
import {PropsWithChildren, Ref, useMemo} from 'react';
import {motion} from 'framer-motion';
import clsx from 'clsx';

export interface TitleProps extends PropsWithChildren {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  ref?: Ref<HTMLHeadingElement>;
}

export default function Heading(props: TitleProps) {
  const {as, ref, className} = props;
  const Title = useMemo(() => {
    return as;
  }, [props.as]);

  return (
      <Title
          ref={ref}
          className={clsx('text-3xl font-semibold', className)}
      >{props.children}</Title>
  );
}

export const AnimatedHeading = motion.create(Heading);