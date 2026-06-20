"use client";
import {motion} from 'motion/react';
import {useContext} from 'react';
import {StackContext} from '@/components/stack/context';

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