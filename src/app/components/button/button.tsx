import {MouseEventHandler, PropsWithChildren, useMemo} from 'react';
import Link from 'next/link';
import styles from './button.module.scss';

interface ButtonProps extends PropsWithChildren {
  asLink?: boolean,
  href?: string,
  external?:boolean,
  variant?: "outlined" | "filled" | "resume"
  onClick?: MouseEventHandler<HTMLButtonElement>,
}

export default function Button(props: ButtonProps) {

  const variant = useMemo(() => {
    switch (props.variant) {
      case 'filled':
        return styles.button__filled;
      case "outlined":
        return styles.button__outlined;
      case "resume":
        return styles.button__resume;
      default:
        return styles.button__filled;
    }
  }, [props.variant])


  if(props.asLink) {
    return (
        <Link href={props.href??""} className={`${styles.button} ${variant}`} target={props.external ? "_blank" : "_self"}>
          {props.children}
        </Link>
    )
  }

  return (
      <button onClick={props.onClick} className={`${styles.button} ${variant}`}>
        {props.children}
      </button>
  )
}