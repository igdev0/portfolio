import {WizardContext} from '@/components/lib/wizard/context';
import {PropsWithChildren} from 'react';


interface CollaborateProviderProps extends PropsWithChildren {
}

export default function WizardProvider(props: CollaborateProviderProps) {
  return (
      <WizardContext.Provider value={{data: []}}>
        {props.children}
      </WizardContext.Provider>
  );
}