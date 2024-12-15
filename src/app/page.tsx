"use client";
import styles from "./page.module.scss";
import Button from '@/app/components/button/button';
import Avatar from '@/app/components/avatar/avatar';

export default function Home() {
  return (
        <div className={styles.page}>
          <div className={styles.container}>
            <header className={styles.home__header}>
              <Avatar/>
              <h1>
                I am Ianos,<br/>
                A software developer,<br/>
                passionated about web3
              </h1>
              <div className={styles.home__header__buttons}>
                <Button asLink={true} href="/about-me" variant="outlined">Who I am</Button>
                <Button asLink={true} href="/about-me" variant="filled">Get in touch</Button>
              </div>
            </header>
          </div>
        </div>
  );
}
