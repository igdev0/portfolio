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
  },
  {
    colors: [
      "#b648e1",
      "#4545cc",
      "#dcb64f",
    ],
    githubURL: "https://github.com/igdev0/tokensmith",
    title: "Tokensmith",
    bio: "A web dApp that allows you to create solana tokens using spl token 2022 on different networks."
  },
  {
    colors: [
      "#c2c2da",
      "#ff2c2b",
      "#dcb64f",
    ],
    githubURL: "https://github.com/igdev0/dev-wallet",
    title: "Dev wallet",
    bio: "A desktop wallet which enables you to create and store keys from a seed."
  },
  {
    colors: [
      "#7c7c7c",
      "#00fd08",
      "#ff2c2b",
    ],
    githubURL: "https://github.com/igdev0/minigrep",
    title: "Minigrep",
    bio: "A light version of grep tool."
  },
  {
    colors: [
      "#e14848",
      "#00fd08",
      "#b648e1",
    ],
    githubURL: "https://github.com/igdev0/bitcoin-block-value-calculator",
    title: "Bitcoin block value calculator",
    bio: "A CLI app that calculates the total BTC spent in a block by hash or height."
  },
  {
    colors: [
      "#fd006b",
      "#282881",
      "#7c7c7c",
    ],
    githubURL: "https://github.com/igdev0/bitcoin-address-generator",
    title: "Bitcoin address generator",
    bio: "P2PKH address generator"
  },
  {
    colors: [
      "#dcb64f",
      "#5656dc",
      "#dcb64f",
    ],
    githubURL: "https://github.com/igdev0/tidy-carousel",
    title: "Tidy carousel",
    bio: "A carousel slider built with vanila js (es2015+)."
  },
  {
    colors: [
      "#5656dc",
      "#c2c2da",
      "#dcb64f",
    ],
    githubURL: "https://github.com/igdev0/codify-idea",
    title: "Codify idea",
    bio: "A single page website developed based on the provided designs for one of my clients."
  },
  {
    colors: [
      "#c2c2da",
      "#dcb64f",
      "#0077ff",
    ],
    githubURL: "https://github.com/igdev0/pro-scan",
    title: "PRO Scan solutions",
    bio: "A medium sized website multilingual developed based on the designs provided for one of my clients in the early 2022."
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