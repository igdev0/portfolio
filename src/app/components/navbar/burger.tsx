"use client";
import styles from './burger.module.scss';
import {ChangeEvent} from 'react';

interface Props {
  onChange: (changed: boolean) => void
}
export default function Burger(props: Props) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.currentTarget.checked)
  }
  return (
      <label htmlFor="check" className={styles.burger}>
        <input className={styles.burger__trigger} type="checkbox" id="check" onChange={handleChange}/>
        <span className={styles.burger__slice}></span>
        <span className={styles.burger__slice}></span>
        <span className={styles.burger__slice}></span>
      </label>
  )
}