import {createContext} from 'react';
import {WizardStep} from '@/components/wizard/step';
import {UseFormReturn} from 'react-hook-form';

interface WizardContextType {
  activeStep: number;
  steps: WizardStep[];
  form:  UseFormReturn<Record<string, unknown>, unknown, Record<string, unknown>> | null;

  next(): void;

  previous(): void;

  addStep(step: WizardStep): void;

  isActive(id: string): boolean;
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
  form: null,
  isActive(id: string) {
    return false;
  }
});