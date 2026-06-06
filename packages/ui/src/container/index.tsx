import clsx from 'clsx';
import {PropsWithChildren} from 'react';

export default function Container(props: PropsWithChildren) {
  const {children} = props;
  return (
        <div className="px-3 md:px-6">
          <div className={clsx('mx-auto border-x border-(--grid-c0) container px-3 md:px-6')}>
            {children}
          </div>
        </div>
  );
}