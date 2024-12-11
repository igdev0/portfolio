import Link, {LinkProps} from 'next/link';
import {PropsWithChildren} from 'react';
import {usePathname} from 'next/navigation';
import styles from './navlink.module.scss';

export interface NavlinkProps extends PropsWithChildren, LinkProps {

}

export default function Navlink(props:NavlinkProps) {
  const pathname = usePathname();
  return (
      <Link href={props.href} className={`${styles.navlink} ${pathname === props.href ? styles.navlink__active : ""}`}>
        {props.children}
      </Link>
  )
}