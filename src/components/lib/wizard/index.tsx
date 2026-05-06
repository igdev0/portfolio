import {PropsWithChildren, useContext} from 'react';
import {WizardContext} from '@/components/lib/wizard/context';
import WizardProvider from '@/components/lib/wizard/provider';
import WizardStep from '@/components/lib/wizard/step';

export default function Wizard(props: PropsWithChildren) {
  const context = useContext(WizardContext);
  return (
      <div>
        <form className="collaborate-form mt-6">
          {
            props.children
          }
        </form>
      </div>
  );
}


Wizard.Provider = WizardProvider;
Wizard.Step = WizardStep;