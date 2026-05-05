import {CollaborateContext} from '@/components/lib/collaborate/context';
import {PropsWithChildren} from 'react';

interface  CollaborateProviderProps extends PropsWithChildren {

}
export default function CollaborateProvider(props: CollaborateProviderProps) {
  return (
      <CollaborateContext.Provider value={{}}>
        {props.children}
      </CollaborateContext.Provider>
  )
}