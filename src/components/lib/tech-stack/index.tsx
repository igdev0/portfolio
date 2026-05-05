import {useContext, useLayoutEffect, useRef} from 'react';
import Button from '@/components/lib/button';
import "./index.css";
import {animate, createDraggable, createScope, Draggable, Scope} from 'animejs';
import useResizeObserver from '@/hooks/use-resize-observer';
import Statement from '@/components/lib/statement';
import {calcNext} from '@/components/lib/tech-stack/utils';
import {stack} from '@/content/profile';
import {TechStackContext} from '@/components/lib/tech-stack/context';


export type StackKey = keyof typeof stack;
const threshold = 60;

export default function TechStack() {
  const {active, setActive, keys, activeRef, dragOffsetRef, drawsRef, draws, calculateDraws, pathRef, cards, controllers, frames} = useContext(TechStackContext);
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

  const handleButtonClick = (index: number) => {
    return () => {
      setActive(index);
    };
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
        <div className="stack-controllers">
          {frames.map((item, index) => (
              <Button active={active === index} disabled={active === index} ref={(el) => {
                if (el) {
                  controllers.current[index] = el;
                }
              }} onClick={handleButtonClick(index)} variant="secondary" key={item.key}>{item.key}</Button>))}
        </div>
        <svg className="stack-overlay">
          {
              draws.length && (
                  <path
                      d={`M ${draws[active].mx} ${draws[active].my} Q ${(draws[active].mx + draws[active].lx) / 2} ${(draws[active].my + draws[active].ly) / 2 - draws[active].c} ${draws[active].lx} ${draws[active].ly}`}
                      ref={pathRef}
                      fill="none"
                      strokeWidth={1}
                      className="stroke-gray-300 dark:stroke-gray-700"/>
              )
          }
        </svg>
        <div className="stack-cards">
          {
            frames.map((frame, index) => (
                    <div
                        className="stack-card"
                        ref={ref => {
                          if (ref) {
                            cards.current[index] = ref;
                          }
                        }} key={frame.key}
                        data-order={index}>
                      <Statement>
                        Hello
                      </Statement>
                    </div>
                )
            )
          }
        </div>
      </div>
  );
}