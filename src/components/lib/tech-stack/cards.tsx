import {Tabs} from '@base-ui/react/tabs';
import {Fragment, useContext, useLayoutEffect, useRef} from 'react';
import {TechStackContext} from '@/components/lib/tech-stack/context';
import {animate, createDraggable, createScope, Draggable, Scope} from 'animejs';
import {calcNext} from '@/components/lib/tech-stack/utils';
import {stack} from '@/content/profile';
import Icon from '@/components/lib/icons';
import Statement from '@/components/lib/statement';

const threshold = 60;

export default function TechStackCards() {
  const {frames, cards, activeRef, data, active, setActive, dragOffsetRef, keys} = useContext(TechStackContext);
  const root = useRef<HTMLDivElement>(null);
  const scope = useRef<Scope>(null);


  const onRelease = (draggable: Draggable) => {
    const nextIndex = calcNext(draggable, activeRef, threshold, keys as string[]);

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
        duration: 300,
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
          frames.map((frame, index) => {
            const content = data[frame.key as keyof typeof stack.tech];
            return (

                <div
                    className="stack-card"
                    ref={ref => {
                      if (ref) {
                        cards.current[index] = ref;
                      }
                    }}
                    key={frame.key}
                    data-order={index}>
                  <div className="inner">
                    <div className="card-header gap-4">
                      <Icon name={content.icon}/>
                      <h4 className="font-bold">{frame.key}</h4>
                    </div>
                    <div className="flex-group mt-4">


                      <Tabs.Root>
                        <Tabs.List className="tabs-header">
                          {
                            Object.keys(content.tabs).map((key) => (
                                <Fragment key={`tab-header-${key}`}>
                                  <Tabs.Tab className="tab-control" nativeButton value={key}>
                                    {key}
                                  </Tabs.Tab>
                                  <Tabs.Indicator/>
                                </Fragment>
                            ))
                          }
                        </Tabs.List>
                        {
                          Object.entries(content.tabs).map(([key, value]) => (
                              <Tabs.Panel key={key} value={key}>
                                <Statement>{value.statement}</Statement>
                              </Tabs.Panel>
                          ))
                        }
                      </Tabs.Root>

                    </div>
                  </div>
                </div>
            );
          })
        }
      </div>
  );
}