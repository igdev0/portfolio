import {createContext} from 'react';
import {WizardStep} from '@/components/lib/wizard/step';
import {UseFormReturn} from 'react-hook-form';

interface WizardContextType {
  activeStep: number;
  steps: WizardStep[];
  form: UseFormReturn<Record<string, never>, unknown, Record<string, never>> | null;

  next(): void;

  previous(): void;

  addStep(step: WizardStep): void;
}

export const WizardContext = createContext<WizardContextType>({
  activeStep: 0,
  steps: [],
  next() {
  },
  previous() {
  },
  addStep() {
  },
  form: null
});