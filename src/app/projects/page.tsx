import styles from './styles.module.scss';
import {Github} from '@/app/components/navbar/icons';

interface ProjectEntityType {
  title: string,
  bio: string,
  githubURL: string,
  colors: string[],
}

const data: ProjectEntityType[] = [
  {
    colors: [
      "#fd006b",
        "#00fd08",
        "#b648e1",
    ],
    githubURL: "https://github.com/igdev0/luckySOL",
    title: "Lucky SOL",
    bio: "A lottery program inspired by traditional lottery system built on solana blockchain."
  }
]


function ProjectCardEntity(props: ProjectEntityType) {
  return (
      <div className={styles.projectsPage__grid__entity}>
        <div className={styles.projectsPage__grid__entity__header} style={{
          background: `radial-gradient(circle at 30% 20%, ${props.colors.at(0)}, transparent 50%),
          radial-gradient(circle at 70% 70%, ${props.colors.at(1)}, transparent 50%),
          radial-gradient(circle at 35% 40%, ${props.colors.at(2)}, transparent 60%)`}}>
        </div>
        <div className={styles.projectsPage__grid__entity__body}>
          <h2>{props.title}</h2>
          <p>{props.bio}</p>
        </div>
        <a className={styles.projectsPage__grid__entity__body__button} href={props.githubURL} target="_blank" rel="noopener">
          View on github <Github/>
        </a>
      </div>
  )
}

export default function Page() {
  return (
      <div className={styles.projectsPage}>
        <div className={styles.projectsPage__container}>
          <h1>Projects</h1>
          <div className={styles.projectsPage__grid}>
            {
              data.map((item, index) => (<ProjectCardEntity  {...item} key={index}/>))
            }
          </div>
        </div>
      </div>
  )
}