import {motion} from 'framer-motion';
import {useContext} from 'react';
import {StackContext} from '@/components/lib/stack/context';

export default function StackOverlay() {
  const {draw} = useContext(StackContext);

  return (
      <motion.svg className="w-full h-full absolute top-0 right-0 left-0 bottom-0 pointer-events-none">
        <motion.path d={draw}
                     strokeWidth={1}
                     className="stroke-gray-300 dark:stroke-gray-700"
        />
      </motion.svg>
  )
}