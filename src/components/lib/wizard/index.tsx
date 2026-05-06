import {PropsWithChildren, useContext} from 'react';
import {WizardContext} from '@/components/lib/wizard/context';
import WizardProvider from '@/components/lib/wizard/provider';
import WizardStep from '@/components/lib/wizard/step';
import Button from '@/components/lib/button';

export interface WizardProps extends PropsWithChildren {
  onSubmit<T = any>(data: T): void;
}

export default function Wizard(props: WizardProps) {
  const context = useContext(WizardContext);

  return (
      <div>
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