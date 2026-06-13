"use client";
import {PropsWithChildren, useContext} from 'react';
import {StackContext} from '@/components/stack/context';
import Button from '@/components/button';
import {IconNames} from '@/components/icons';

export interface StackControllerProps extends PropsWithChildren {
  id: number;
  icon?: IconNames;
}

export default function StackTrigger(props: StackControllerProps) {
  const {children, icon} = props;
  const {setActive, active, triggers} = useContext(StackContext);

  return (
      <Button className="stack-trigger"
              variant="secondary"
              ref={(r) => {
                triggers.current[props.id] = r as HTMLButtonElement;
              }}
              active={active === props.id} disabled={active === props.id} icon={icon}
              onClick={() => setActive(props.id)}>
        {children}
      </Button>
  );
}