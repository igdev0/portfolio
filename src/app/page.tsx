import styles from "./page.module.scss";
import Navbar from '@/app/components/navbar/navbar';

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar/>
    </div>
  );
}
