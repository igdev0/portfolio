"use client";
import {PropsWithChildren, useContext} from 'react';
import {StackContext} from '@/components/stack/context';
import Button from '@/components/button';
import {IconNames} from '@/components/icons';
import {DefaultBoundingBox} from '@/components/stack/const';

export interface StackControllerProps extends PropsWithChildren {
  id: number;
  icon?: IconNames;
}

export default function StackTrigger(props: StackControllerProps) {
  const {children, icon} = props;
  const {setActive, active, frames, triggers} = useContext(StackContext);

  return (
      <Button className="stack-trigger"
              variant="secondary"
              ref={(r) => {
                const {left, width, height, top} = r?.getBoundingClientRect() ?? DefaultBoundingBox;
                const {y: parentY, x: parentX} =r?.offsetParent?.getBoundingClientRect()??DefaultBoundingBox;
                if (frames.current.length) {
                  frames.current[props.id].mx = left + width - parentX;
                  frames.current[props.id].my = top + (height / 2) - parentY;
                }
                triggers.current[props.id] = r as HTMLButtonElement;
              }}
              active={active === props.id} disabled={active === props.id} icon={icon}
              onClick={() => setActive(props.id)}>
        {children}
      </Button>
  );
}