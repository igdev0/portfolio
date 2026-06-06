import {useContext, useLayoutEffect} from 'react';
import useResizeObserver from '@/hooks/use-resize-observer';
import "./index.css";
import {stack} from '@/content/profile';
import {TechStackContext} from '@/components/lib/tech-stack/context';
import TechStackControllers from '@/components/lib/tech-stack/controllers';
import TechStackCards from '@/components/lib/tech-stack/cards';
import TechStackOverlay from '@/components/lib/tech-stack/overlay';

export type StackKey = keyof typeof stack;

export default function TechStack() {
  const {
    drawsRef,
    draws,
    calculateDraws,
  } = useContext(TechStackContext);
  const [addRef] = useResizeObserver();

  useLayoutEffect(() => {
    drawsRef.current = draws;
  }, [draws]);

  useLayoutEffect(() => {
    calculateDraws();
  }, []);

  return (
      <div className="tech-stack"
           ref={addRef(calculateDraws)}
      >
        <TechStackControllers/>
        <TechStackOverlay/>
        <TechStackCards/>
      </div>
  );
}