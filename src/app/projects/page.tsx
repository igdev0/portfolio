import styles from './styles.module.scss';
import {Github} from '@/app/components/navbar/icons';

interface ProjectEntityType {
  title: string,
  bio: string,
  githubURL?: string,
  colors: string[],
  websiteURL?: string,
  tags: string[]
}



const TAGS = {
      fullStack: "Full-Stack",
      backend: "Backend",
      frontend: "Frontend",
      web3: "Web3",
      javascript: "javascript",
      typescript: "typescript",
      rust: "rust",
      cli: "CLI"
};

const data: ProjectEntityType[] = [
  {
    colors: [
      "#fd006b",
        "#00fd08",
        "#b648e1",
    ],
    githubURL: "https://github.com/igdev0/luckySOL",
    title: "Lucky SOL",
    bio: "A lottery game built on solana blockchain, the project is built for a demo for a good friend of mine.",
    tags: [TAGS.frontend, TAGS.backend, TAGS.rust, TAGS.web3, TAGS.typescript],
  },
  {
    colors: [
      "#b648e1",
      "#4545cc",
      "#dcb64f",
    ],
    githubURL: "https://github.com/igdev0/tokensmith",
    title: "Tokensmith",
    bio: "A web dApp that allows you to create solana tokens using spl token 2022 on different networks.",
    tags: [TAGS.frontend, TAGS.typescript],
  },
  {
    colors: [
      "#c2c2da",
      "#ff2c2b",
      "#dcb64f",
    ],
    githubURL: "https://github.com/igdev0/dev-wallet",
    title: "Dev wallet",
    bio: "A desktop wallet which enables you to create and store keys from a seed.",
    tags: [TAGS.frontend, TAGS.web3, TAGS.typescript, TAGS.rust]
  },
  {
    colors: [
      "#7c7c7c",
      "#00fd08",
      "#ff2c2b",
    ],
    githubURL: "https://github.com/igdev0/minigrep",
    title: "Minigrep",
    bio: "A light version of grep tool.",
    tags: [TAGS.cli, TAGS.rust],
  },
  {
    colors: [
      "#e14848",
      "#00fd08",
      "#b648e1",
    ],
    githubURL: "https://github.com/igdev0/bitcoin-block-value-calculator",
    title: "Bitcoin block value calculator",
    bio: "A CLI app that calculates the total BTC spent in a block by hash or height.",
    tags: [TAGS.cli, TAGS.rust],
  },
  {
    colors: [
      "#fd006b",
      "#282881",
      "#7c7c7c",
    ],
    githubURL: "https://github.com/igdev0/bitcoin-address-generator",
    title: "Bitcoin address generator",
    bio: "P2PKH address generator",
    tags: [TAGS.cli, TAGS.rust],
  },
  {
    colors: [
      "#dcb64f",
      "#5656dc",
      "#dcb64f",
    ],
    githubURL: "https://github.com/igdev0/tidy-carousel",
    title: "Tidy carousel",
    bio: "A carousel slider built with vanila js (es2015+).",
    tags: [TAGS.frontend, TAGS.javascript],
  },
  {
    colors: [
      "#5656dc",
      "#c2c2da",
      "#dcb64f",
    ],
    websiteURL: "https://codifyidea.com",
    title: "Codify idea",
    bio: "A single page website developed based on the provided designs for one of my clients.",
    tags: [TAGS.frontend, TAGS.typescript]
  },
  {
    colors: [
      "#c2c2da",
      "#dcb64f",
      "#0077ff",
    ],
    websiteURL: "https://pro-scan-solutions.ro",
    title: "PRO Scan solutions",
    bio: "A medium sized website multilingual developed based on the designs provided for one of my clients in the early 2022.",
    tags: [TAGS.fullStack, TAGS.typescript]
  }
]


function ProjectCardEntity(props: ProjectEntityType) {
  return (
      <div className={styles.projectsPage__grid__entity}>
        <div className={styles.projectsPage__grid__entity__header} style={{
          background: `radial-gradient(circle at 30% 20%, ${props.colors.at(0)}, transparent 50%),
          radial-gradient(circle at 70% 70%, ${props.colors.at(1)}, transparent 50%),
          radial-gradient(circle at 35% 40%, ${props.colors.at(2)}, transparent 60%)`
        }}>
        </div>
        <div className={styles.projectsPage__grid__entity__body}>
          <h2>{props.title}</h2>
          <p>{props.bio}</p>
        </div>
        <div>

          <div className={styles.projectsPage__grid__entity__body__tags}>
            {
              props.tags.map((tag, index) => <span key={index}
                                                   className={styles.projectsPage__grid__entity__body__tags__tag}>{tag}</span>)
            }
          </div>
          <div className={styles.projectsPage__grid__entity__body__buttons}>
            {
                props.websiteURL && (

                    <a className={styles.projectsPage__grid__entity__body__button} href={props.websiteURL} target="_blank"
                       rel="noopener">
                      Visit website 🌐
                    </a>
                )
            }
            {
                props.githubURL && (
                    <a className={styles.projectsPage__grid__entity__body__button} href={props.githubURL} target="_blank"
                       rel="noopener">
                      View on github <Github/>
                    </a>
                )
            }
          </div>
        </div>
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