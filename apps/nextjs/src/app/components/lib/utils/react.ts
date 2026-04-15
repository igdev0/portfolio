import {type} from 'arktype';

export const reactTypes = type.module({
  ReactNode: "ReactPrimitive | ReactElement | ReactNode[]",

  ReactPrimitive: "string | number | boolean | null | undefined",

  ReactElement: {
    type: "unknown",
    props: "unknown",
    key: "string | number | null"
  }
});