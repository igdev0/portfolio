import styles from './work-history.module.scss';
import {Briefcase, Building, Calendar} from '@/app/components/navbar/icons';
import Expandable from '@/app/components/expandable/expandable';

interface WorkEntityProps {
  role: string,
  place: string,
  from: string,
  until: string,
  description: string
  details: string
}

const data: WorkEntityProps[] = [{
  role: "Software engineer (front-end)",
  place: "Input Output, Remote",
  from: "March 2022",
  until: "April 2024",
  description: "As part of an agile scrum team, I worked as a front-end software engineer on ideating,\n" +
      "designing and developing a DevOps tool, a sandbox tool for issuing and verifying\n" +
      "verifiable credentials, and a browser wallet.",
  details: `
<h4>Key responsibilities and contributions:</h4>
<ul>
  <li>Led the front-end development of the web tools;</li>
  <li>Reviewed code contributions from team mates, ensuring code quality;</li>
  <li>Contributed to each step in the process of development, from ideating to real-thing agent infrastructure provisioning tool;</li>
  <li>Developed a reusable react component library for the designs given;</li>
  <li>Worked closely with the UI designer to develop the best UI/UX possible;</li>
  <li>Contributed to the wallet SDK;</li>
  <li>Developed and maintained the atala PRISM main website;</li>
  <li>Contributed to the development of PRISM agent documentation website;</li>
  <li>Maintained the legacy browser wallet extension;</li>
</ul>
  `
}, {
  role: "Full-Stack Developer",
  place: "Finervision, London",
  from: "February 2020",
  until: "February 2022",
  description: "As part of a small agile team of full-stack developers, I worked on several small to medium sized web projects and medium sized native apps for different clients such as Sainsbury's, HSBC, Teva and other.",
  details: `
<h4>Key responsibilities and contributions:</h4>
<ul>
    <li>Contributed to a few native apps using React native and Expo;</li>
    <li>Collaborated with some clients directly, to ease the development process and help the team;</li>
    <li>Contributed to resolving complex app data migration issues;</li>
    <li>Transformed designs into pixel-perfect responsive and functional code;</li>
    <li>Automated content integration into apps using Google APIs;</li>
    <li>Delivered timely ahead of project deadline most of the time;</li>
    <li>Supported team mates fixing bugs & helping them meet the deadline;</li>
    <li>Equipped virtual machines with the necessary software for web services;</li>
    <li>Maintained legacy projects and fixed bunch of bugs;</li>
    <li>Developed numerous bespoke designed emails;</li>
</ul>
  `
}];

function WorkEntity({role, place, from, until, details, description}: WorkEntityProps) {
  return (
      <div className={styles.workHistory__entity}>
        <ul className={styles.workHistory__entity__meta}>
          <li><Briefcase/>{role}</li>
          <li><Building/>{place}</li>
          <li><Calendar/>{from} - {until}</li>
        </ul>
        <Expandable>
          <p>{description}</p>
          <div className={styles.workHistory__entity__details} dangerouslySetInnerHTML={{__html: details}}/>
        </Expandable>
      </div>
  );
}

export default function WorkHistory() {
  return (
      <>
        <h1>Work History</h1>
        <div className={styles.workHistory}>
          {
            data.map((entity, index) => (
                <WorkEntity {...entity} key={index}/>
            ))
          }
        </div>
      </>
  );
}