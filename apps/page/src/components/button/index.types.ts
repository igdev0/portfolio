import {type Static, Type} from '@sinclair/typebox';
import type {ReactNode} from 'react';

export const onClick = Type.Function([], Type.Void());

export const buttonProps = Type.Object({
  type: Type.Optional(
      Type.Union([
        Type.Literal('button'),
        Type.Literal('submit')
      ])
  ),
  text: Type.String(),
  onClick: onClick,
});

export interface ButtonProps extends Static<typeof buttonProps> {
  children?: ReactNode;
}