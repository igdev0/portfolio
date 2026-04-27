import {stack} from '@/components/lib/tech-stack-v2/const';
import {useLayoutEffect, useMemo, useState} from 'react';
import Button from '@/components/lib/button';
import "./index.css";
import Container from '@/components/lib/container';
import {createDraggable, Draggable, JSAnimation, spring, utils} from 'animejs';

export interface TechStackProps {
  data: typeof stack;
}

interface FrameRef {
  target: HTMLElement | null;
  animation: JSAnimation | null;
  key: string;
  isNext: boolean;
  distance: number;
  offset: number;
  scale: number;
  z: number;
  index: number;
}

export type StackKey = keyof typeof stack;
const threshold = 60;
export default function TechStackV2(props: TechStackProps) {
  const stackKeys = [...Object.keys(props.data)];
  const [active, setActive] = useState(0);

  const frames = useMemo<FrameRef[]>(() =>{
    return stackKeys.map((key, index) => {
      let delta = index - active;
      const total = stackKeys.length;

      if (delta > total / 2) delta -= total;
      if (delta < -total / 2) delta += total;

      const distance = Math.abs(delta);
      const offset = 0.13;

      return {
        target: null,
        animation: null,
        key: key as StackKey,
        isNext: false,
        distance,
        offset: delta * 30,
        z: total - distance,
        scale: 1 - offset * distance,
        index,
      };
    })
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
      return safeIndex(sum < 0 ? active + 1 : active - 1);
    }

    return active;
  };

  const onRelease = (draggable: Draggable) => {
    const next = calcNext(draggable);
    setActive(next);
  };

  useLayoutEffect(() => {
    for (const {index: i, target: card} of frames) {
      if (!card) continue;
      utils.set(card, {y: frames[i].offset, scale: frames[i].scale, z: frames[i].z});
      const cardWidth = card.clientWidth;
      const cardHeight = card.clientHeight;

      createDraggable(card, {
        container: [-cardWidth, cardHeight, cardHeight, -cardWidth],
        releaseEase: spring({bounce: .2}),
        snap: [0, 0, 0, 0],
        onUpdate,
        onRelease,
      });
    }
  }, [frames]);

  return (
      <Container>
        <div className="tech-stack-v2">
          <div className="stack-controllers">
            {frames.map((item, index) => (
                <Button onClick={() => setActive(index)} variant="secondary" key={item.key}>{item.key}</Button>))}
          </div>
          <svg className="stack-overlay"/>
          <div className="stack-cards">
            {
              frames.map((frame, index) => (
                      <div key={frame.key}
                           ref={(ref) => {
                             frame.target = ref;
                           }}
                           data-order={index}
                           style={{transform: `scale(${frame.scale}) translateZ(${frame.z}) translateY(${frame.offset}px)`}}
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