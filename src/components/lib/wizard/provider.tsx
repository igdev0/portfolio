"use client";
import {WizardContext} from '@/components/lib/wizard/context';
import {PropsWithChildren, useMemo, useRef, useState} from 'react';
import {WizardStep} from '@/components/lib/wizard/step';
import * as z from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

interface CollaborateProviderProps extends PropsWithChildren {
}

export default function WizardProvider(props: CollaborateProviderProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [steps, setSteps] = useState<WizardStep[]>([]);
  const schemaRef = useRef<z.ZodObject>(null);

  const schema = useMemo(() => {
    const prev = schemaRef.current;
    if(!steps[activeStep]) {
      schemaRef.current = z.object();
      return schemaRef.current; // return empty object so its safely typed.
    }
    const step = steps[activeStep];
    let target = prev as z.ZodObject;

    for (const [name, field] of Object.entries(step.fields)) {
      target = target.extend({
        [name]: field.schema
      });
    }
    schemaRef.current = prev!.extend(target.shape);
    return schemaRef.current;
  }, [steps, activeStep]);

  const form = useForm({
    resolver: zodResolver(schema),
  });

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

  function isActive(id: string) {
    return steps[activeStep].id === id;
  }

  return (
      <WizardContext.Provider value={{
        next,
        previous,
        form,
        steps,
        addStep,
        activeStep,
        isActive
      }}>
        {props.children}
      </WizardContext.Provider>
  );
}