import styles from './navbar.module.scss';
import Burger from '@/app/components/navbar/burger';

export default function Navbar() {
  return (
      <div className={styles.navbar}>
        <Burger/>
      </div>
  )
}