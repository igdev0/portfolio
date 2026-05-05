import {useContext, useLayoutEffect, useRef} from 'react';
import {TechStackContext} from '@/components/lib/tech-stack/context';
import Statement from '@/components/lib/statement';
import {animate, createDraggable, createScope, Draggable, Scope} from 'animejs';
import {calcNext} from '@/components/lib/tech-stack/utils';
import {stack} from '@/content/profile';
import Tag from '@/components/lib/tag';

const threshold = 60;

export default function TechStackCards() {
  const {frames, cards, activeRef, data, active, setActive, dragOffsetRef, keys} = useContext(TechStackContext);
  const root = useRef<HTMLDivElement>(null);
  const scope = useRef<Scope>(null);


  const onRelease = (draggable: Draggable) => {
    const nextIndex = calcNext(draggable, activeRef, threshold, keys);

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
    activeRef.current = active;
    stackCards();
  }, [active]);

  return (

      <div className="stack-cards" ref={root}>
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
                    <div className="card-header">
                      <h4 className="font-bold">{frame.key}</h4>
                    </div>
                    <Statement>
                      {data[frame.key as keyof typeof stack.tech].statement}
                    </Statement>
                    <div className="flex-group">
                      {
                        data[frame.key as keyof typeof stack.tech].tags.map((tag, index) => (
                            <Tag key={`tech-${tag}`}>{tag}</Tag>
                        ))
                      }
                    </div>
                  </div>
              )
          )
        }
      </div>
  );
}