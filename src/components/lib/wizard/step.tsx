"use client";
import {useContext, useLayoutEffect} from 'react';
import {WizardContext} from '@/components/lib/wizard/context';
import Icon, {IconNames} from '@/components/lib/icon';
import {ZodType} from 'zod';

interface WizardField {
  type: "text",
  label: string;
  placeholder: string;
  name: string;
  schema: ZodType
}

export interface WizardStep {
  id: string;
  icon: IconNames;
  fields: WizardField[];
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
          props.fields.map((field, index) => (
              <fieldset key={index}>
                <Icon name={props.icon}/>
                <label htmlFor={field.name}>
                  {field.label}
                  <input type={field.type} name={field.name} placeholder={field.placeholder}/>
                </label>
              </fieldset>
          ))
        }
      </>
  );
}