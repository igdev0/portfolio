import {ReactNode} from 'react';
import clsx from 'clsx';
import "./index.css";
import {ScrollText} from 'lucide-react';

export interface PanelProps {
  className?: string;
  children?: ReactNode;
}

export default function Panel(props: PanelProps) {
  const {className, children} = props;
  return (
      <div className={clsx('panel', className)}>
        <div>
          <ScrollText className="stroke-accent-500"/>
        </div>
        <span>
        {children}
        </span>
      </div>
  );
}