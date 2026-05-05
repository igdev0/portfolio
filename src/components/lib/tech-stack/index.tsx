import {PropsWithChildren, useLayoutEffect, useMemo, useRef, useState} from 'react';
import Button from '@/components/lib/button';
import "./index.css";
import {animate, createDraggable, createScope, Draggable, Scope} from 'animejs';
import useResizeObserver from '@/hooks/use-resize-observer';
import Statement from '@/components/lib/statement';
import {calcFrames, calcNext, safeIndex} from '@/components/lib/tech-stack/utils';
import {stack} from '@/content/profile';

export interface TechStackProps extends PropsWithChildren {
  data: typeof stack;
  auto?: boolean;
}

interface FrameRef {
  key: string;
  distance: number;
  offset: number;
  scale: number;
  z: number;
  i: number;
}

interface PathData {
  mx: number;
  my: number;
  lx: number;
  ly: number;
  c: number;
}

export type StackKey = keyof typeof stack;
const threshold = 60;

export default function TechStack(props: TechStackProps) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(false);
  const [addRef, , root] = useResizeObserver();
  const scope = useRef<Scope>(null);
  const cards = useRef<HTMLDivElement[]>([]);
  const [draws, setDraws] = useState<PathData[]>([]);
  const drawsRef = useRef<PathData[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const dragOffsetRef = useRef<{ x: number; y: number }>({x: 0, y: 0});
  const controllers = useRef<HTMLButtonElement[]>([]);
  const stackKeys = [...Object.keys(props.data)];
  const activeRef = useRef(active);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isPausedRef = useRef(false);


  const frames = useMemo<FrameRef[]>(() => {
    return calcFrames(active, stackKeys);
  }, [active]);

  const onRelease = (draggable: Draggable) => {
    const nextIndex = calcNext(draggable, activeRef, threshold, stackKeys);

    // reset drag offset so line snaps back
    dragOffsetRef.current.x = 0;
    dragOffsetRef.current.y = 0;

    setActive(nextIndex);
  };

  const stackCards = () => {
    calculateDraws();
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

  const onMouseEnter = () => {
    if (auto) {
      isPausedRef.current = true;
    }
  };

  const onMouseLeave = () => {
    if (auto) {
      isPausedRef.current = false;
    }
  };

  const onAfterResize = () => {
    stackCards();
  };

  const startTimer = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      if (isPausedRef.current) return;
      setActive(prev => safeIndex(prev + 1, stackKeys));
    }, 2000);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleButtonClick = (index: number) => {
    return () => {
      setActive(index);
      if (auto) {
        stopTimer();
        startTimer();
      }
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

    if (auto) {
      startTimer();
    }

    return () => {
      stopTimer();
    };
  }, [auto]);

  const calculateDraws = () => {
    const {x, y} = dragOffsetRef.current;

    setDraws(
        frames.map((frame) => {
          const controller = controllers.current[frame.i];
          const card = cards.current[frame.i];
          const border = 2;
          const mx = controller.offsetLeft + controller.clientWidth + border;
          const my = controller.offsetTop + controller.clientHeight / 2;

          const rect = card.getBoundingClientRect();

          const baseLx = (card.parentElement?.offsetLeft ?? 0) + card.offsetLeft;
          const baseLy = rect.height / 2;

          const lx = baseLx + (frame.i === activeRef.current ? x : 0);
          const ly = baseLy + (frame.i === activeRef.current ? y : 0);

          return {mx, my, lx, ly, c: 0};
        })
    );
  };

  useLayoutEffect(() => {
    setAuto(props?.auto ?? false);
  }, [props.auto]);

  useLayoutEffect(() => {
    activeRef.current = active;
    stackCards();
  }, [active]);

  return (
      <div ref={addRef(calculateDraws)} className="tech-stack-v2"

           onMouseEnter={onMouseEnter}

           onMouseLeave={onMouseLeave}
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