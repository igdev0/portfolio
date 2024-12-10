import styles from './menu.module.scss';
import Link from 'next/link';

export default function Menu({open}: {open: boolean}) {
  return (
      <div className={styles.menu} style={{transform: `translateX(${open ? 0 : -100}%)`}}>
        <img src="/images/avatar.png" alt="Avatar" width={200} height={200}/>
        <Link href="/">About me</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Blog</Link>
      </div>
  )
}