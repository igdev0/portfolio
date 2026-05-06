import {ReactNode, useContext} from 'react';
import {WizardContext} from '@/components/lib/wizard/context';
import WizardProvider from '@/components/lib/wizard/provider';
import WizardStep from '@/components/lib/wizard/step';
import Button from '@/components/lib/button';
import Icon from '@/components/lib/icon';
import clsx from 'clsx';

export interface WizardProps {
  children: ReactNode[]

  onSubmit<T = any>(data: T): void;
}

export default function Wizard(props: WizardProps) {
  const context = useContext(WizardContext);
  return (
      <div>
        <div className="flex gap-3">
          {
            context.steps.map((step) => (
                <div className={clsx('border-2 border-(--semigrid) p-2 rounded-sm', context.isActive(step.id) ? 'text-accent-500' : '')} key={step.id}>
                  <Icon name={step.icon}/>
                </div>
            ))
          }
        </div>
        <form className="collaborate-form mt-6" onSubmit={context.form?.handleSubmit(props.onSubmit)}>
          {
            props.children
          }
          <Button type="submit">Submit</Button>
        </form>
      </div>
  );
}


Wizard.Provider = WizardProvider;
Wizard.Step = WizardStep;