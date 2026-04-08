import {type} from 'arktype';
import {ForwardedRef} from 'react';

export const baseProps = type({
  className: 'string',
  as: "'div'|'p'|'button'",
  'children?': 'string|string[]',
});

export type BaseProps = typeof baseProps.infer;

export default function Base(props: BaseProps, ref: ForwardedRef<any>) {
  const {children, className = '', as: Element = 'div'} = props;

  return (
      <Element ref={ref} className={className}>
        {children}
      </Element>
  );
}