import {stack} from '@/components/lib/tech-stack-v2/const';
import {useEffect, useLayoutEffect, useMemo, useRef, useState} from 'react';
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
  const stackKeys = [...Object.keys(props.data)];
  const [active, setActive] = useState(0);
  const activeRef = useRef(active);

  const calcFrames = (active: number) => {
    return stackKeys.map((key, index) => {
      let delta = index - active;
      const total = stackKeys.length;

      if (delta > total / 2) delta -= total;
      if (delta < -total / 2) delta += total;

      const distance = Math.abs(delta);
      const offset = 0.13;

      return {
        isActive: active === index,
        key: key as StackKey,
        distance,
        offset: delta * 30,
        z: total - distance,
        scale: 1 - offset * distance,
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

    utils.set(draggable.$target, {
      x: draggable.x,
      y: draggable.y,
      scale: Math.max(0.7, 1 - distance / 300),
    });
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

    const nextFrames = calcFrames(nextIndex);
    for (const element of root.current?.querySelectorAll(".stack-card") || []) {
      const order = element.attributes.getNamedItem("data-order");
      if (order) {
        const parsed = parseInt(order.value);
        utils.set(element, {
          z: nextFrames[parsed].z,
          y: nextFrames[parsed].offset,
          scale: nextFrames[parsed].scale,
        });
      }
    }
  };


  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useLayoutEffect(() => {
    if (scope.current) {
      scope.current.revert();
    }

    scope.current = createScope({root}).add((self) => {
        const cards = self?.root.querySelectorAll(".stack-card");

        if(!cards) {return}

        for (const card of cards) {
          const order = card.attributes.getNamedItem("data-order");
          if (order) {
            const i = parseInt(order.value);

            utils.set(card, {
              y: frames[i].offset,
              scale: frames[i].scale,
              z: frames[i].z
            });

            const cardWidth = card.clientWidth;
            const cardHeight = card.clientHeight;
            console.log("Reapplying")
            createDraggable(card, {
              container: [-cardWidth, cardHeight, cardHeight, -cardWidth],
              releaseEase: spring({bounce: .2}),
              snap: [0, 0, 0, 0],
              onUpdate,
              onRelease,
            });
          }
        }
      });

  }, [frames]);

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