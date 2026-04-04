import {PropsWithChildren} from 'react';
import clsx from 'clsx';

interface Props extends PropsWithChildren {
  className?: string;
}

export default function Statement(props: Props) {
  return (
      <div className={clsx(`border-l-4 pl-4 border-gray-200 mb-4 mt-4`, props.className)}>
        <p>
          {props.children}
        </p>
      </div>
  );
}