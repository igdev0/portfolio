import Html from '@/app/components/lib/html';
import {motion} from 'framer-motion';
import Statement from '@/app/components/lib/statement';
import Button from '@/app/components/lib/button';

export const components = {
  div: motion.div,
  p: motion.p,
  pre: motion.pre,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  header: motion.header,
  span: motion.span,
  section: motion.section,
  html: Html,
  button: Button,
  statement: Statement,
} as const;