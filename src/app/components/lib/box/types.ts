import {type} from 'arktype';

export const SemanticTags = type("'div'|'p'|'button'|'h1'|'h2'|'h3'|'h4'|'span'");

export const elementBoundaries = type.scope({
  'className?': 'string',
  'as?': SemanticTags,

})

export const boxBoundaries = type.scope({
  // Width:
  'w?': 'string',

  // Height:
  'h?': 'string',

  // Margins:
  'm?': 'string',
  'mt?': 'string',
  'mb?': 'string',
  'mr?': 'string',
  'ml?': 'string',
  'mx?': "string",
  'my?': "string",

  // Padding:
  'p?': 'string',
  'px?': 'string',
  'pl?': 'string',
  'pr?': 'string',
  'pt?': 'string',
  'pb?': 'string',
  'py?': 'string',
});

export const BoxProps = type({
  ...boxBoundaries.export(),
  ...elementBoundaries.export(),
});

export type BoxProps = typeof BoxProps.infer;
