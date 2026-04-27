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
    const distance = Math.sqrt(draggable.x ** 2 + draggable.y ** 2);
    utils.clamp(0.7, distance);

    // tweak this, but keep it clamped
    const scale = Math.max(0.7, 1 - distance / 300);

    utils.set(draggable.$target, {
      x: draggable.x,
      y: draggable.y,
      scale,
    });
  };

  const onRelease = (draggable: Draggable) => {
    const threshold = 60;

    if (draggable.y < -threshold) {
      setActive(prev => wrapIndex(prev + 1));
    } else if (draggable.y > threshold) {
      setActive(prev => wrapIndex(prev - 1));
    }

    utils.set(draggable.$target, {
      x: 0,
      y: 0,
      scale: 1,
    });
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

        const draggable = createDraggable(card, {
          container: [-card.clientWidth, card.clientHeight, card.clientHeight, -100],
          minVelocity: 10,
          releaseEase: spring({bounce: .2}),
          onUpdate,
          onRelease,
        });
        draggable.setY(frames[i].offsetValue);

        draggable.onRelease = (draggable) => {
          const threshold = 60;
          const offset = draggable.x > draggable.y ? draggable.x : draggable.y;

          if (offset > threshold) {
            setActive(prev => wrapIndex(prev + 1));
          } else {
            setActive(prev => wrapIndex(prev - 1));
          }
        };
        i++;
      }

    });
    return () => scope.current!.revert();
  }, [root, active]);


  return (
      <Container>
        <div className="tech-stack-v2" ref={root}>
          <div className="stack-controllers">
            {frames.map((item, index) => (<Button onClick={() => setActive(index)} variant="secondary" key={item.key}>{item.key}</Button>))}
          </div>
          <svg className="stack-overlay"/>
          <div className="stack-cards">
            {
              frames.map((frame, index) => (
                  <div key={frame.key}
                       style={{transform: `scale(${frame.scale}) translateZ(${frame.z}) translateY(${frame.offsetValue}px)`}}
                       className="stack-card">{frame.key}</div>)
              )
            }
          </div>
        </div>
      </Container>
  );
}