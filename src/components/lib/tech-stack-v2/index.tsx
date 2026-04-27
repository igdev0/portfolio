import {stack} from '@/components/lib/tech-stack-v2/const';
import {useLayoutEffect, useMemo, useRef, useState} from 'react';
import Button from '@/components/lib/button';
import "./index.css";
import Container from '@/components/lib/container';
import {createDraggable, createScope, Draggable, Scope, spring, utils} from 'animejs';

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
  const scope = useRef<Scope>(null);
  const cards = useRef<HTMLDivElement[]>([]);
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

  const onUpdate = (draggable: Draggable) => {
    const distance = calcDistance(draggable.x, draggable.y);

    const scale = Math.max(0.7, 100 - distance / 300);



    utils.set(draggable.$target, {
      translateZ: frames[active].scale - (distance / stackKeys.length),
      translateY: draggable.y,
      scaleZ: scale,
    });
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
    setActive(nextIndex);
    if(nextIndex !== active) {
      for (const element of cards.current) {

        utils.set(element, {
          translateZ: frames[active].scale,
          translateY: frames[active].offset,
          scaleZ: frames[active].z,
        });
      }
    }
  };


  useLayoutEffect(() => {
    if (scope.current) {
      scope.current.revert();
    }

    scope.current = createScope({root}).add((self) => {
      const card = cards.current[active];

      const cardWidth = card.clientWidth;
      const cardHeight = card.clientHeight;

      createDraggable(card, {
        container: [-cardWidth, cardHeight, cardHeight, -cardWidth],
        releaseEase: spring({bounce: .2}),
        snap: [0, 0, 0, 0],
        onUpdate,
        onRelease,
      });
    });

  }, [active]);

  useLayoutEffect(() => {
    let i = 0;
    for (const card of cards.current) {
      utils.set(card, {
        translateZ: frames[i].scale,
        translateY: frames[i].offset,
        scaleZ: frames[i].z,
      });
      i++;
    }
  }, [cards, active]);

  return (
      <Container>
        <div className="tech-stack-v2" ref={root}>
          <div className="stack-controllers">
            {frames.map((item, index) => (
                <Button active={active === index} onClick={() => setActive(index)} variant="secondary"
                        key={item.key}>{item.key}</Button>))}
          </div>
          <svg className="stack-overlay"/>
          <div className="stack-cards">
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