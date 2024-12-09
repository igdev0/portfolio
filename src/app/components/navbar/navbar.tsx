"use client";
import styles from './navbar.module.scss';
import Burger from '@/app/components/navbar/burger';

export default function Navbar() {
  const handleBurgerChange = (changed: boolean) => {
  }
  return (
      <div className={styles.navbar}>
        <Burger onChange={handleBurgerChange}/>
      </div>
  )
}