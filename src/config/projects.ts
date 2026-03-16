export const TAGS = {
  fullStack: "Full-Stack",
  backend: "Backend",
  frontend: "Frontend",
  web3: "Web3",
  javascript: "javascript",
  typescript: "typescript",
  rust: "rust",
  cli: "CLI"
};

export interface ProjectEntityType {
  title: string,
  bio: string,
  githubURL?: string,
  colors: string[],
  websiteURL?: string,
  tags: string[]
}

export const projects: ProjectEntityType[] = [
  {
    colors: [
      "#ff2c2b",
      "#dcb64f",
      "#0077ff",
    ],
    githubURL: "https://github.com/igdev0/bee-funded",
    title: "Bee funded",
    bio: "In short, this project is a platform enables users to create donation pools that supporters can either subscribe to for recurring contributions or fund through one-time donations using ERC-20 or native tokens.",
    tags: [TAGS.frontend, TAGS.web3, TAGS.typescript],
  },
  {
    colors: [
      "#dcb64f",
      "#ff2c2b",
      "#b648e1",
    ],
    githubURL: "https://github.com/igdev0/simple-nft-indexer",
    title: "NFT Indexer",
    bio: "A app that allows you to Index all of NFTs minted on the Ethereum blockchain using Alchemy's Enhanced APIs",
    tags: [TAGS.frontend, TAGS.web3, TAGS.typescript],
  },
  {
    colors: [
      "#e17648",
      "#00fd08",
      "#b648e1",
    ],
    githubURL: "https://github.com/igdev0/simple-erc20-indexer",
    title: "ERC-20 Indexer",
    bio: "A app that allows you to Index all of an address's ERC-20 token balances using Alchemy's Enhanced APIs",
    tags: [TAGS.frontend, TAGS.web3, TAGS.typescript],
  },
  {
    colors: [
      "#fd006b",
      "#00fd08",
      "#b648e1",
    ],
    githubURL: "https://github.com/igdev0/luckySOL",
    title: "Lucky SOL",
    bio: "A lottery game built on solana blockchain.",
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
];