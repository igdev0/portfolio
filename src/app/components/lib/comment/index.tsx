import {PropsWithChildren} from 'react';
import "./index.css";

export default function Comment(props: PropsWithChildren) {
  return (
      <span className="comment">
        {props.children}
      </span>
  )
}