import {stack} from '@/components/lib/tech-stack-v2/const';
import {useLayoutEffect, useMemo, useRef, useState} from 'react';
import Button from '@/components/lib/button';
import "./index.css";
import Container from '@/components/lib/container';
import {createDraggable, createScope, Draggable, Scope, spring, utils} from 'animejs';

export interface TechStackProps {
  data: typeof stack;
}

export type StackKey = keyof typeof stack;
const threshold = 60;
export default function TechStackV2(props: TechStackProps) {
  const root = useRef<HTMLDivElement>(null);
  const scope = useRef<Scope>(null);

  const stackKeys = [...Object.keys(props.data)];
  const [active, setActive] = useState(0);

  const frames = useMemo(() => {
    return stackKeys.map((key, index) => {
      let delta = index - active;
      const total = stackKeys.length;

      if (delta > total / 2) delta -= total;
      if (delta < -total / 2) delta += total;

      const distance = Math.abs(delta);
      const offset = 0.13;

      return {
        key: key as StackKey,
        isActive: index === active,
        distance,
        offsetValue: delta * 30,
        z: total - distance,
        scale: 1 - offset * distance,
        index,
      };
    });
  }, [active, stackKeys]);

  const wrapIndex = (next: number) => {
    if (next < 0) return stackKeys.length - 1;
    if (next >= stackKeys.length) return 0;
    return next;
  };

  const onUpdate = (draggable: Draggable) => {
    const distance = calcDistance(draggable.x, draggable.y);

    const next = calcNext(draggable);

    const scale = Math.max(0.7, 1 - distance / 300);

    utils.set(draggable.$target, {
      x: draggable.x,
      y: draggable.y,
      scale,
    });
  };

  const calcDistance = (x: number, y: number) => {
    return Math.sqrt(x ** 2 + y ** 2);
  };

  const calcNext = (draggable: Draggable) => {
    const distance = calcDistance(draggable.x, draggable.y);

    const sum = draggable.x + draggable.y;

    if (distance > threshold) {
      return (sum < 0 ? active + 1 : active - 1);
    }
    /**
     * 1. Check if distance is bigger than threshold.
     * 2. Check if
     */

    return active;
  };

  const onRelease = (draggable: Draggable) => {
    const next = calcNext(draggable);
    console.log({active, next});
    setActive(next);
  };

  useLayoutEffect(() => {
    scope.current = createScope({root}).add((self) => {
      const cards = self?.root.querySelectorAll(".stack-card");
      if (!cards) {
        throw new Error(`No cards found`);
      }

      let i = 0;
      for (const card of cards) {

        utils.set(card, {y: frames[i].offsetValue, scale: frames[i].scale, z: frames[i].z});
        const cardWidth = card.clientWidth;
        const cardHeight = card.clientHeight;

        const draggable = createDraggable(card, {
          container: [-cardWidth, cardHeight, cardHeight, -cardWidth],
          releaseEase: spring({bounce: .2}),
          snap: [0,0,0,0],
          onUpdate,
          onRelease,
        });
        draggable.setY(frames[i].offsetValue);
        i++;
      }

    });
    return () => scope.current!.revert();
  }, [root, active]);


  return (
      <Container>
        <div className="tech-stack-v2" ref={root}>
          <div className="stack-controllers">
            {frames.map((item, index) => (
                <Button onClick={() => setActive(index)} variant="secondary" key={item.key}>{item.key}</Button>))}
          </div>
          <svg className="stack-overlay"/>
          <div className="stack-cards">
            {
              frames.map((frame, index) => (
                  <div key={frame.key}
                       data-order={index}
                       style={{transform: `scale(${frame.scale}) translateZ(${frame.z}) translateY(${frame.offsetValue}px)`}}
                       className="stack-card">{frame.key}</div>)
              )
            }
          </div>
        </div>
      </Container>
  );
}