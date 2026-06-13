import "./index.css";
import Html from '@/components/html';
import {PropsWithChildren} from 'react';
import clsx from 'clsx';

interface Props {
  className?: string;
}

export default function Statement(props: Props & PropsWithChildren) {
  const {className = '', children} = props;
  return (
      <Html className={clsx('statement', className)}>
        {children}
      </Html>
  );
}