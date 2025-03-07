"use client";
import styles from "./page.module.scss";
import Button from '@/app/components/button/button';
import Avatar from '@/app/components/avatar/avatar';

export default function Home() {
  return (
        <div className={styles.page}>
          <div className="container">
            <header className={styles.home__header}>
              <Avatar/>
              <h1>
                I am Ianos, a software developer that transforms coffee into code.
              </h1>
              <div className={styles.home__header__buttons}>
                <Button asLink={true} href="/about-me" variant="outlined">Who I am</Button>
                <Button asLink={true} href="/contact" variant="filled">Get in touch</Button>
              </div>
            </header>
          </div>
        </div>
  );
}
