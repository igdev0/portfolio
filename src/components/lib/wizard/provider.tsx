import {WizardContext} from '@/components/lib/wizard/context';
import {PropsWithChildren, useState} from 'react';
import {WizardStep} from '@/components/lib/wizard/step';


interface CollaborateProviderProps extends PropsWithChildren {
}

export default function WizardProvider(props: CollaborateProviderProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [steps, setSteps] = useState<WizardStep[]>([]);

  function next() {
    setActiveStep(prev => prev + 1 > steps.length - 1 ? steps.length - 1 : prev + 1);
  }

  function previous() {
    setActiveStep(prev => prev - 1 < 0 ? 0 : prev - 1);
  }

  function addStep(step: WizardStep) {
    /**
     * Add in the new step, but if it exists, just refresh the given step (so it rerenders properly in hot mode).
     */
    setSteps((prev) => {
      const existingIndex = prev.findIndex(item => item.id === step.id);
      if (existingIndex > -1) {
        return prev.map(item => item.id === step.id ? step : item);
      } else {
        return [...prev, step];
      }
    });
  }

  return (
      <WizardContext.Provider value={{next, previous, steps, addStep, activeStep}}>
        {props.children}
      </WizardContext.Provider>
  );
}