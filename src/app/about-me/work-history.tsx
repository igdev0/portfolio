import styles from './work-history.module.scss';
import {Briefcase, Building, Calendar} from '@/app/components/navbar/icons';

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
  description: "As a member of the Atala team at IOHK, I served as the Technology Owner within an agile scrum team. My primary responsibilities included designing and implementing new features for the SSI web platform, focusing on enhancing its functionality and user experience.",
  details: `
<h4>Accomplishments:</h4>
<ul>
    <li>Led the front-end development of the web tools.</li>
    <li>Contributed to the development of the backend for the agent</li>
    provisoning tool.
    <li>Contributed to the development of the PRISM SSI agent</li>
    provisioning tool (from idea to real thing).
    <li>Developed a react component library for the designs given.</li>
    <li>Supported UI/UX designer to create desings for the web products.</li>
    <li>Supported the wallet SDK team to achieve the PI objectives.</li>
    <li>Supported the design and architecture of the wallet SDK.</li>
    <li>Maintained Atala’s main website and developed our docs website</li>
    using Docusaurus.
    <li>Maintained the legacy browser wallet extension.</li>
</ul>
  `
}, {
  role: "Full-Stack Developer",
  place: "Finervision, London",
  from: "February 2020",
  until: "February 2022",
  description: "Contributed to a range of native and web projects, transforming designs into pixel-perfect, responsive, and functional code solutions for clients such as Sainsbury’s and HSBC. Developed RESTful APIs and maintained legacy projects.",
  details: `
<h4>Accomplishments:</h4>
<ul>
    <li>Developed several responsive mobile native and web apps with</li>
    React, React Native and Expo.
    <li>Crafted reusable React UI Components to boost productivity.</li>
    <li>Resolved legacy data migration issues and improved app</li>
    performance through investigation and optimization.
    <li>Automated content integration into various native/mobile apps</li>
    using Google APIs.
    <li>Efficiently identified and resolved bugs to maintain high-quality</li>
    standards.
    <li>Ensured the timely delivery of web and native projects with a focus</li>
    on code quality standards.
    <li>Set up a virtual machine equipped with the necessary software for</li>
    web services.
    <li>Collaborated effectively as part of an agile/kanban team.</li>
</ul>
  `
}]

function WorkEntity({role, place, from, until, details, description}: WorkEntityProps) {
  return (
      <div className={styles.workHistory__entity}>
        <ul className={styles.workHistory__entity__meta}>
          <li><Briefcase/>{role}</li>
          <li><Building/>{place}</li>
          <li><Calendar/>{from} - {until}</li>
        </ul>
        <p>{description}</p>
        <div className={styles.workHistory__entity__details} dangerouslySetInnerHTML={{__html: details}}/>
      </div>
  );
}

export default function WorkHistory() {
  return (
      <div className={styles.workHistory}>
        <h2>Work History</h2>
        {
          data.map((entity, index) => (
              <WorkEntity {...entity} key={index}/>
          ))
        }
      </div>
  );
}