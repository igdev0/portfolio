import {createContext} from 'react';

interface WizardContextType {
  data: [];
}

export const WizardContext = createContext<WizardContextType>({data: []});