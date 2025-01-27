"use client";
import styles from './burger.module.scss';
import {ChangeEvent, ForwardedRef, forwardRef, useState} from 'react';

interface Props {
  onChange: (changed: boolean) => void
}



function Burger(props: Props, ref: ForwardedRef<HTMLLabelElement>) {
  const [value, setValue] = useState(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.currentTarget.checked)
    setValue(v => !v);
  }
  return (
      <label htmlFor="check" className={styles.burger} ref={ref}>
        <input className={styles.burger__trigger} type="checkbox" id="check" onChange={handleChange} checked={value}/>
        <span className={styles.burger__slice}></span>
        <span className={styles.burger__slice}></span>
        <span className={styles.burger__slice}></span>
      </label>
  )
}

export default forwardRef(Burger);