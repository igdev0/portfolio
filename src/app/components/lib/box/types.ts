import {type} from 'arktype';
import {PropsWithChildren} from 'react';

export const SemanticTags = type("'div'|'p'|'button'|'h1'|'h2'|'h3'|'h4'|'span'|'header' | 'section'|'html'|'statement'");
export const elementBoundaries = type.scope({
  'className?': 'string',
  'as?': SemanticTags,
});

export const BoxProps = type({
  ...elementBoundaries.export(),
});

export type BoxProps = typeof BoxProps.infer & PropsWithChildren;
