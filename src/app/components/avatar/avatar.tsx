import styles from './avatar.module.scss';
import Image from 'next/image';

export default function Avatar() {
  return (
      <div className={styles.avatar}>
        <Image src="/images/avatar.png" alt="Avatar" width={200} height={200}/>
      </div>
  )
}