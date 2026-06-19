"use client";
import "./index.css";
import {PropsWithChildren, ReactNode} from 'react';
import clsx from 'clsx';
import {Tooltip} from '@base-ui/react';
import {InfoIcon} from 'lucide-react';

interface TagProps extends PropsWithChildren {
  className?: string;
  tooltipPopup?: ReactNode;
}
// -mr-.5 self-start mt-[2px]
export default function Tag(props: TagProps) {
  return (
      <Tooltip.Provider delay={0}>
        <Tooltip.Root>

          <Tooltip.Trigger  className={clsx('tag relative', props.className, props.tooltipPopup && "cursor-pointer")}>
              {props.children}
            {props.tooltipPopup && <InfoIcon size={15} className=" absolute bottom-0 left-0 right-0 bg-(--grid) rounded-full p-.5 mx-auto translate-y-[50%] stroke-(--background)"/>}
          </Tooltip.Trigger>
          {
              props.tooltipPopup && (
                  <Tooltip.Portal>
                    <Tooltip.Positioner side="bottom" sideOffset={12} align="center">
                      <Tooltip.Popup className={clsx("bg-(--background) rounded-sm border border-(--grid)",popupClass)}>
                        <Tooltip.Arrow className={arrowClass}/>
                        {props.tooltipPopup}
                      </Tooltip.Popup>
                    </Tooltip.Positioner>s
                  </Tooltip.Portal>
              )
          }
        </Tooltip.Root>
      </Tooltip.Provider>
  );
}


const popupClass =
    clsx('relative px-2 py-1 text-sm origin-[var(--transform-origin)] shadow-md transition-[transform,opacity] duration-100 ease-out data-ending-style:opacity-0 data-ending-style:[transform:scale(0.98)] data-instant:transition-none data-starting-style:opacity-0 data-starting-style:[transform:scale(0.98)] dark:shadow-none');
const arrowClass =
    "relative block w-3 h-1.5 overflow-clip data-[side=bottom]:top-[-6px] data-[side=left]:right-[-9px] data-[side=left]:rotate-90 data-[side=right]:left-[-9px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-6px] data-[side=top]:rotate-180 before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-[calc(6px*sqrt(2))] before:h-[calc(6px*sqrt(2))] before:bg-white dark:before:bg-(--surface-2) before:border before:border-(--surface-2) dark:before:border-(--surface-2) before:[transform:translate(-50%,50%)_rotate(45deg)]";