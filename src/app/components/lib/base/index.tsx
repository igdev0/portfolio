import {type} from 'arktype';
import {ForwardedRef, PropsWithChildren} from 'react';

export const baseProps = type({
  className: 'string',
  'html?': 'string',
  as: "'div'|'p'|'button'|'h1'|'h2'|'h3'|'h4'",
});

export type BaseProps = typeof baseProps.infer & PropsWithChildren;


export default function Base(props: BaseProps, ref?: ForwardedRef<any>) {
  const {children, className = '', html, as: Element = 'div'} = props;

  if (html) {
    return (
        <Element ref={ref} className={className} dangerouslySetInnerHTML={{__html: html}}/>
    );
  }
  return (
      <Element ref={ref} className={className}>
        {children}
      </Element>
  );
}