import {MouseEventHandler, PropsWithChildren, useMemo} from 'react';
import Link from 'next/link';
import styles from './button.module.scss';

interface ButtonProps extends PropsWithChildren {
  asLink?: boolean,
  href?: string,
  variant?: "outlined" | "filled"
  onClick?: MouseEventHandler<HTMLButtonElement>,
}

export default function Button(props: ButtonProps) {

  const variant = useMemo(() => {
    switch (props.variant) {
      case 'filled':
        return styles.button__filled;
      case "outlined":
        return styles.button__outlined;
      default:
        return styles.button__filled;
    }
  }, [props.variant])


  if(props.asLink) {
    return (
        <Link href={props.href??""} className={`${styles.button} ${variant}`}>
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