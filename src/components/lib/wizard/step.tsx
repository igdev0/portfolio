"use client";
import {useContext, useLayoutEffect} from 'react';
import {WizardContext} from '@/components/lib/wizard/context';
import Icon, {IconNames} from '@/components/lib/icon';
import {ZodType} from 'zod';

interface WizardField {
  type: "text",
  label: string;
  placeholder: string;
  schema: ZodType
}

export type WizardStepFields = Record<string, WizardField>

export interface WizardStep {
  id: string;
  icon: IconNames;
  fields: WizardStepFields;
}

export interface WizardStepProps extends WizardStep {
  title: string;
  description: string;
}

export default function WizardStep(props: WizardStepProps) {
  const context = useContext(WizardContext);

  useLayoutEffect(() => {
    context.addStep({id: props.id, icon: props.icon, fields: props.fields})
  }, [props]);

  return (
      <>
        {
          Object.entries(props.fields).map(([name,field], index) => (
              <fieldset key={index}>
                <Icon name={props.icon}/>
                <label htmlFor={name}>
                  {field.label}
                  <input type={field.type} name={name} placeholder={field.placeholder}/>
                </label>
              </fieldset>
          ))
        }
      </>
  );
}