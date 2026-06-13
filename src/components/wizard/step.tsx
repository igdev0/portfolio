"use client";
import {Fragment, useContext, useLayoutEffect} from 'react';
import {WizardContext} from '@/components/wizard/context';
import Icon, {IconNames} from '@/components/icons';
import {ZodType} from 'zod';

interface WizardBaseField {
  label?: string;
  name?: string;
  placeholder: string;
  schema: ZodType;
}

interface WizardTextField extends WizardBaseField {
  type: "text";
  defaultValue?: string;
}

interface Option {
  value: string;
  label: string;
}

interface WizardOptionsField extends WizardBaseField {
  type: "radio";
  options: Record<string, Option>,
  defaultValue?: string;
}

export type WizardStepFields = Record<string, WizardTextField | WizardOptionsField>

export interface WizardStep {
  id: string;
  icon: IconNames;
  fields: WizardStepFields;
}

export interface WizardStepProps extends WizardStep {
  title: string;
  description: string;
}

export function TextInput(props: Omit<WizardTextField, "schema" | "type">) {
  const context = useContext(WizardContext);
  const p = context.form?.register(props.name as keyof object);
  console.log(p);
  return (
      <label className="p-2  bg-gray-200 dark:bg-gray-800 rounded-sm" htmlFor={props.name}>
        <span>{props.label}</span>
        <input type="text" />
        {/*<input type="text" placeholder={props.placeholder} {...context.form?.register(props.name as keyof object)}/>*/}
        <span className="text-red-400">{context.form?.formState?.errors[props.name as keyof object]?.message}</span>
      </label>
  );
}

export default function WizardStep(props: WizardStepProps) {
  const context = useContext(WizardContext);

  useLayoutEffect(() => {
    context.addStep({id: props.id, icon: props.icon, fields: props.fields});
  }, [props]);
  /**
   * Verify that steps are set and if the step is not equal to the current one return null
   */
  if (context.steps[context.activeStep] && context.steps[context.activeStep].id !== props.id) return null;

  return (
      <fieldset className="flex flex-col gap-2">
        <div className="flex-group">
          <Icon name={props.icon}/>
          <h3 className="text-2xl">{props.title}</h3>
        </div>
        <p className="text-accent-300">{props.description}</p>
        {
          Object.entries(props.fields).map(([name, field], index) => (
              <Fragment key={name}>
                {
                    field.type === 'text' && (<TextInput placeholder={field.placeholder} label={field.label}/>)
                }
              </Fragment>
          ))
        }
      </fieldset>
  );
}