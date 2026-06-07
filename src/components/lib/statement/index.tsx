import "./index.css";
import {AnimatedHtml} from '@/components/lib/html';
import {PropsWithChildren} from 'react';
import {Transition} from 'motion';
import clsx from 'clsx';

interface Props {
  className?: string;
  transition?: Transition;
}

export default function Statement(props: Props & PropsWithChildren) {
  const {className = '', children, transition} = props;
  return (
      <AnimatedHtml className={clsx('statement', className)} whileInView={{opacity: 1, y: 0}} transition={transition}
                    initial={{opacity: 0, y: 20}}>
        {children}
      </AnimatedHtml>
  );
}