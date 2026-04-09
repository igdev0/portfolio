import {type} from 'arktype';
import {PropsWithChildren} from 'react';

const widthFraction = type('string & /^\\d+\\/\\d+$/');   // 1/2, 3/4
// const widthNumber = type('string & /^\\d+$/');           // 4, 12, 96
const widthArbitrary = type('string & /^\\[.+\\]$/');    // [300px]
const widthVar = type('string & /^\\(.+\\)$/');          // (--my-var)
const widthNumber = type("'0'|'1'|'2'|'3'|'4'|'5'|'6'|'8'|'10'|'12'|'16'|'20'|'24'|'32'|'40'|'48'|'56'|'64'|'72'|'80'|'96'");

export const SemanticTags = type("'div'|'p'|'button'|'h1'|'h2'|'h3'|'h4'|'span'");
export const elementBoundaries = type.scope({
  'className?': 'string',
  'as?': SemanticTags,
});

export const labeledWidth = type("'3xs'|'2xs'|'xs'|'sm'|'md'|'lg'|'xl'|'2xl'|'3xl'|'4xl'|'5xl'|'6xl'|'7xl'|'auto'|'full'|'screen'|'dvw'|'dvh'|'lvw'|'lvh'|'svw'|'svh'|'min'|'max'|'fit'");

export const widthOptions = labeledWidth
    .or(widthFraction)
    .or(widthNumber)
    .or(widthArbitrary)
    .or(widthVar);

export const boxBoundaries = type.scope({
  // Width:
  'w?': widthOptions,

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

export type BoxProps = typeof BoxProps.infer & PropsWithChildren;
