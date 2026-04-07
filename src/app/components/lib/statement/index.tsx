import {PropsWithChildren} from 'react';
import "./index.css";
import {cva} from 'class-variance-authority';

interface Props extends PropsWithChildren {
  className?: string;
}

export const statementVariants = cva('statement', {
  variants: {}
});

export default function Statement(props: Props) {
  const {className = '', children, ...variants} = props;
  return (
      <div className={`${statementVariants(variants)} ${className}`}>
        <p>
          {children}
        </p>
      </div>
  );
}