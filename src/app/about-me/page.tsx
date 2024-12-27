"use client";
import styles from "./styles.module.scss";
import TechnicalSkills from '@/app/about-me/technical-skills';
import WorkHistory from '@/app/about-me/work-history';

export default function About() {
  return (
      <>
        <div className={styles.page}>
          <div className={styles.page__container}>
            <div>
              <h1 className="section__title">About me</h1><br/><br/>
              <p>
                My name is Ianos, and I’m from Cluj-Napoca, Romania. After graduating high school in 2014, I embarked on
                an
                exciting journey, moving to London in 2015. Driven by a passion for technology, I began teaching myself
                web
                programming in 2016 through platforms like Codecademy, Udemy, Pluralsight, FreeCodeCamp, and other resources
                such as
                the Mozilla Developer Network and W3Schools.
              </p>
              <p>
                In 2018, I took a significant step in my career by working with my first freelance client. It was a
                rewarding experience where I not only started earning my first income in the field but also had the
                privilege of delivering value and happiness to my clients.
              </p>
              <p>
                By 2022, I achieved a major milestone by signing my first employment contract as a professional software
                developer. Over the next two years, I honed my skills, contributed to meaningful projects, and grew
                tremendously. Later, I transitioned into a B2B role with a large corporation, where I continued to
                thrive
                and make an impact within the web3 world.
              </p>
              <p>
                In early 2024, I made the deliberate decision to take a well-deserved break to recharge, reconnect with
                my
                social life, and embrace the moments that come with closing the chapter on my 20s. It’s been a
                fulfilling
                journey so far, and I’m excited about what the future holds as I continue to grow both personally and
                professionally.
              </p>
              <h3 className="section__title">
                What is next...
              </h3>
              <p>
                As I step into the next phase of my journey, I’m eager to embrace new challenges and opportunities that
                push
                me to grow both personally and professionally. My focus is on deepening my expertise in software
                development, particularly in cutting-edge fields like blockchain technology, decentralized applications,
                and
                innovative web solutions.
              </p>
              <p>
                I’m also passionate about contributing to impactful projects that make a difference, whether it’s
                through
                creating efficient, user-centric applications or collaborating on open-source initiatives.
              </p>
              <p>
                Looking ahead, I aim to combine my technical skills with my curiosity and creativity to build products
                that
                not only solve real-world problems but also inspire others. Whether it’s joining a dynamic team, leading
                new
                projects, or continuing my journey of self-improvement, I’m excited about the possibilities on the
                horizon.
              </p>
              <h1>Technical skills</h1>
              <TechnicalSkills/>
              <WorkHistory/>
            </div>
          </div>
        </div>
      </>

  );
}
