import {stack} from '@/components/lib/tech-stack-v2/const';
import {useLayoutEffect, useMemo, useRef, useState} from 'react';
import Button from '@/components/lib/button';
import "./index.css";
import Container from '@/components/lib/container';
import {animate, createDraggable, createScope, Draggable, Scope} from 'animejs';

export interface TechStackProps {
  data: typeof stack;
}

interface FrameRef {
  key: string;
  distance: number;
  offset: number;
  scale: number;
  z: number;
  i: number;
}

export type StackKey = keyof typeof stack;
const threshold = 60;
export default function TechStackV2(props: TechStackProps) {
  const root = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const scope = useRef<Scope>(null);
  const cards = useRef<HTMLDivElement[]>([]);
  const controllers = useRef<HTMLButtonElement[]>([]);
  const stackKeys = [...Object.keys(props.data)];
  const [active, setActive] = useState(0);
  const activeRef = useRef(active);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isPausedRef = useRef(false);

  const calcFrames = (active: number) => {
    return stackKeys.map((key, index) => {
      let delta = index - active;
      const total = stackKeys.length;

      if (delta > total / 2) delta -= total;
      if (delta < -total / 2) delta += total;

      const distance = Math.abs(delta);
      return {
        key: key as StackKey,
        distance,
        offset: active === index ? 0 : delta * 30,
        z: total - distance,
        scale: -distance * 20,
        i: index,
      };
    });
  };

  const frames = useMemo<FrameRef[]>(() => {
    return calcFrames(active);
  }, [active]);

  const safeIndex = (next: number) => {
    if (next < 0) return stackKeys.length - 1;
    if (next >= stackKeys.length) return 0;
    return next;
  };


  const calcDistance = (x: number, y: number) => {
    return Math.sqrt(x ** 2 + y ** 2);
  };

  const calcNext = (draggable: Draggable) => {
    const distance = calcDistance(draggable.x, draggable.y);
    const sum = draggable.x + draggable.y;

    if (distance > threshold) {
      return safeIndex(sum < 0 ? activeRef.current + 1 : activeRef.current - 1);
    }

    return activeRef.current;
  };

  const onRelease = (draggable: Draggable) => {
    const nextIndex = calcNext(draggable);
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

  const startTimer = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      if (isPausedRef.current) return;

      setActive(prev => safeIndex(prev + 1));
    }, 2000); // 3s, tweak as needed
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
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
        });
      }
    });

  }, []);
  useLayoutEffect(() => {
    startTimer();

    return () => {
      stopTimer();
    };
  }, []);

  useLayoutEffect(() => {
    activeRef.current = active;
    stackCards();
  }, [active]);

  return (
      <Container>
        <div className="tech-stack-v2" ref={root}

             onMouseEnter={() => {
               isPausedRef.current = true;
             }}

             onMouseLeave={() => {
               isPausedRef.current = false;
             }}
        >
          <div className="stack-controllers">
            {frames.map((item, index) => (
                <Button active={active === index} ref={(el) => {
                  if (el) {
                    controllers.current[index] = el;
                  }
                }} onClick={() => {
                  setActive(index);
                  stopTimer();
                  startTimer();
                }} variant="secondary"
                        key={item.key}>{item.key}</Button>))}
          </div>
          <svg className="stack-overlay">
            <path d="" strokeWidth={2} className="stroke-accent-400"/>
          </svg>
          <div className="stack-cards" ref={container}>
            {
              frames.map((frame, index) => (
                      <div ref={ref => {
                        if (ref) {
                          cards.current[index] = ref;
                        }
                      }} key={frame.key}
                           data-order={index}
                           className="stack-card">
                        {frame.key}
                      </div>
                  )
              )
            }
          </div>
        </div>
      </Container>
  );
}