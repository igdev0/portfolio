import {stack} from '@/components/lib/tech-stack-v2/const';
import {useLayoutEffect, useMemo, useRef, useState} from 'react';
import Button from '@/components/lib/button';
import "./index.css";
import Container from '@/components/lib/container';
import {animate, createDraggable, createScope, Draggable, Scope, spring} from 'animejs';

export interface TechStackProps {
  data: typeof stack;
}

interface FrameRef {
  key: string;
  distance: number;
  offset: number;
  scale: number;
  z: number;
  index: number;
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

  const calcFrames = (active: number) => {
    return stackKeys.map((key, index) => {
      let delta = index - active;
      const total = stackKeys.length;

      if (delta > total / 2) delta -= total;
      if (delta < -total / 2) delta += total;

      const distance = Math.abs(delta);
      return {
        isActive: active === index,
        key: key as StackKey,
        distance,
        offset: delta * 30,
        z: total - distance,
        scale: -distance * 20,
        index,
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
      return safeIndex(sum < 0 ? active + 1 : active - 1);
    }

    return active;
  };

  const onRelease = (draggable: Draggable) => {
    const nextIndex = calcNext(draggable);

    // always reset draggable position so it doesn't get stuck
    animate(draggable.$target, {
      translateX: 0,
      translateY: 0,
      duration: 200,
    });

    setActive(nextIndex);

    if (nextIndex !== active) {
      let i = 0;
      const frame = frames[i];
      for (const element of cards.current) {
        animate(element, {
          translateZ: frame.scale,
          translateY: frame.offset,
          scaleZ: frame.z,
          duration: 200,
        });
        i++;
      }
    }
  };


  useLayoutEffect(() => {
    if (scope.current) {
      scope.current.revert();
    }

    scope.current = createScope({root}).add(() => {
      const card = cards.current[active];

      createDraggable(card, {
        releaseEase: spring({bounce: .2}),
        x: {
          snap: 200
        },
        y: {
          snap: 200,
        },
        onRelease,
      });
    });

  }, [active]);

  useLayoutEffect(() => {
    let i = 0;
    for (const card of cards.current) {
      animate(card, {
        translateZ: frames[i].scale,
        translateY: frames[i].offset,
        scaleZ: frames[i].z,
        duration: 200,
      });

      i++;
    }
  }, [cards, active]);

  return (
      <Container>
        <div className="tech-stack-v2" ref={root}>
          <div className="stack-controllers">
            {frames.map((item, index) => (
                <Button active={active === index} ref={(el) => {
                  if (el) {
                    controllers.current[index] = el;
                  }
                }} onClick={() => setActive(index)} variant="secondary"
                        key={item.key}>{item.key}</Button>))}
          </div>
          <svg className="stack-overlay">
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