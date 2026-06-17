import Panel from '@/components/panel';
import {Collapsible} from '@base-ui/react';
import {ChevronDown, ScanText} from 'lucide-react';
import {ReactNode} from 'react';

export interface ExpandableProps {
  className?: string;
  children?: ReactNode;
  header?: ReactNode;
}
export default function Expandable(props: ExpandableProps) {
  const {className, children, header} = props;
  return (

      <Collapsible.Root className={className}>
        <Panel className="mt-6">
          <Collapsible.Trigger className="text-left flex flex-col cursor-pointer">
            <div className="flex gap-3">
                  <span>
                    <ScanText/>
                  </span>
              {header}
            </div>
            <ChevronDown className="stroke-accent-500 self-center mt-2"/>
          </Collapsible.Trigger>
          <Collapsible.Panel hiddenUntilFound={true} className="flex h-(--collapsible-panel-height) flex-col justify-end overflow-hidden text-sm transition-[height] duration-150 ease-[ease-out] [&[hidden]:not([hidden='until-found'])]:hidden data-ending-style:h-0 data-starting-style:h-0">
              {children}
          </Collapsible.Panel>
        </Panel>
      </Collapsible.Root>
  )
}