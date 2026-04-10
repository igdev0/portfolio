import React, {ElementType} from "react";

export type RefFromElement<T extends ElementType> =
    React.ComponentPropsWithRef<T> extends { ref?: infer R }
        ? R
        : never;

export type BoxProps<T extends ElementType, P = {}> = P & {
  as?: T;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof P | "as"> &
    (RefFromElement<T> extends never
        ? {}
        : { ref?: React.Ref<RefFromElement<T>> });

function Box<T extends ElementType>(
    props: BoxProps<T>
) {
  const { as, children, ...rest } = props;
  const Component = as ?? "div";

  return (
      <Component {...rest}>
        {children}
      </Component>
  );
}

export default Box;