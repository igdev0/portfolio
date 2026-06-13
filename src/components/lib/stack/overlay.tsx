import {motion} from 'framer-motion';
import {useContext} from 'react';
import {StackContext} from '@/components/lib/stack/context';

export default function StackOverlay() {
  const {draw} = useContext(StackContext);

  return (
      <motion.svg className="stack-overlay">
        <motion.path d={draw}
                     strokeWidth={1}
                     className="stroke-gray-300 dark:stroke-gray-700"
        />
      </motion.svg>
  )
}