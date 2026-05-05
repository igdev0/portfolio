import {useContext, useLayoutEffect, useRef} from 'react';
import "./index.css";
import {animate, createDraggable, createScope, Draggable, Scope} from 'animejs';
import useResizeObserver from '@/hooks/use-resize-observer';
import {calcNext} from '@/components/lib/tech-stack/utils';
import {stack} from '@/content/profile';
import {TechStackContext} from '@/components/lib/tech-stack/context';
import TechStackControllers from '@/components/lib/tech-stack/controllers';
import TechStackCards from '@/components/lib/tech-stack/cards';
import TechStackOverlay from '@/components/lib/tech-stack/overlay';


export type StackKey = keyof typeof stack;
const threshold = 60;

export default function TechStack() {
  const {active, setActive, keys, activeRef, dragOffsetRef, drawsRef, draws, calculateDraws, cards, frames} = useContext(TechStackContext);
  const [addRef, , root] = useResizeObserver();
  const scope = useRef<Scope>(null);


  const onRelease = (draggable: Draggable) => {
    const nextIndex = calcNext(draggable, activeRef, threshold, keys);

    // reset drag offset so line snaps back
    dragOffsetRef.current.x = 0;
    dragOffsetRef.current.y = 0;

    setActive(nextIndex);
  };

  const stackCards = () => {
    for (const frame of frames) {
      animate(cards.current[frame.i], {
        translateZ: frame.scale,
        translateY: frame.offset,
        translateX: 0,
        scaleZ: frame.z,
        duration: 200,
      });
    }
    scope.current?.refresh();
  };

  const onAfterResize = () => {
    stackCards();
  };

  const onUpdate = (draggable: Draggable) => {
    dragOffsetRef.current.x = draggable.x;
    dragOffsetRef.current.y = draggable.y;
  };

  useLayoutEffect(() => {
    if (scope.current) {
      scope.current.revert();
    }
    scope.current = createScope({root}).add(() => {
      for (const frame of frames) {
        createDraggable(cards.current[frame.i], {
          snap: [0, 0, 0, 0],
          x: activeRef.current === frame.i,
          y: activeRef.current === frame.i,
          onAfterResize,
          onRelease,
          onUpdate,
        });
      }
    });

  }, []);

  useLayoutEffect(() => {
    drawsRef.current = draws;
  }, [draws]);

  useLayoutEffect(() => {
    calculateDraws();
  }, []);

  useLayoutEffect(() => {
    activeRef.current = active;
    stackCards();
  }, [active]);

  return (
      <div className="tech-stack-v2"
           ref={addRef(calculateDraws)}
      >
        <TechStackControllers/>
        <TechStackOverlay/>
        <TechStackCards/>
      </div>
  );
}