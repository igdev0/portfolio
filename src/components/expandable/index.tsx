import {Collapsible} from '@base-ui/react';
import {ChevronDown, ScanText} from 'lucide-react';
import {ReactNode} from 'react';
import "./index.css";

export interface ExpandableProps {
  className?: string;
  children?: ReactNode;
  header?: ReactNode;
}
export default function Expandable(props: ExpandableProps) {
  const {className, children, header} = props;
  return (

      <Collapsible.Root className={className}>
        <div className="panel mt-16 relative pb-9" style={{borderTopLeftRadius: 0}}>
          <Collapsible.Trigger className="text-left flex flex-col cursor-pointer">
            <div className="relative">
                  <span className="absolute block -top-[12px] -left-[13px] border -translate-y-full bg-foundation-800 border-b-0 p-3 rounded-t-md border-(--grid)">
                    <ScanText/>
                  </span>
              {header}
            </div>
            <ChevronDown className="stroke-accent-500 self-center mb-2 absolute right-0 bottom-0 left-0 mx-auto"/>
          </Collapsible.Trigger>
          <Collapsible.Panel className="flex h-(--collapsible-panel-height) flex-col justify-end overflow-hidden text-sm transition-[height] duration-150 ease-[ease-out] [&[hidden]:not([hidden='until-found'])]:hidden data-ending-style:h-0 data-starting-style:h-0">
              {children}
          </Collapsible.Panel>
        </div>
      </Collapsible.Root>
  )
}