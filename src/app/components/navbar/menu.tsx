import styles from './menu.module.scss';
import Navlink from '@/app/components/navbar/navlink';
import Avatar from '@/app/components/avatar/avatar';

export default function Menu({open, offset}: {open: boolean, offset: number}) {
  return (
      <div className={styles.menu} style={{transform: `translateX(${open ? 0 : -100}%)`, width: offset + 100, minWidth: 400}}>
        <Avatar/>
        <Navlink href="/">
          Root
        </Navlink>
        <Navlink href="/about-me">
          About me
        </Navlink>
        <Navlink href="/projects">
          Projects
        </Navlink>
        <Navlink href="/contact">
          Contact
        </Navlink>
        <Navlink href="/blog">
          Blog
        </Navlink>
      </div>
  )
}