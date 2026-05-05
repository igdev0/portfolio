import {TechStackContext} from '@/components/lib/tech-stack/context';
import {useContext} from 'react';

export default function TechStackOverlay() {
  const {draws, active, pathRef} = useContext(TechStackContext);
  return (

      <svg className="stack-overlay">
        {
            draws.length && (
                <path
                    d={`M ${draws[active].mx} ${draws[active].my} Q ${(draws[active].mx + draws[active].lx) / 2} ${(draws[active].my + draws[active].ly) / 2 - draws[active].c} ${draws[active].lx} ${draws[active].ly}`}
                    ref={pathRef}
                    fill="none"
                    strokeWidth={1}
                    className="stroke-gray-300 dark:stroke-gray-700"/>
            )
        }
      </svg>
  );
}