import {createContext} from 'react';
import {WizardStep} from '@/components/lib/wizard/step';

interface WizardContextType {
  activeStep: number;
  steps: WizardStep[];
  next(): void;
  previous(): void;
  addStep(step: WizardStep): void;
}

export const WizardContext = createContext<WizardContextType>({
  activeStep: 0,
  steps: [],
  next() {},
  previous() {},
  addStep(){},
});