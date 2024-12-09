import styles from './burger.module.scss';

export default function Burger() {
  return (
      <label htmlFor="check" className={styles.burger}>
        <input className={styles.burger__trigger} type="checkbox" id="check"/>
        <span className={styles.burger__slice}></span>
        <span className={styles.burger__slice}></span>
        <span className={styles.burger__slice}></span>
      </label>
  )
}