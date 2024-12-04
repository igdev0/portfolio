import {createGlobalStyle} from 'styled-components';

export const MainCSS = createGlobalStyle`
  :root {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
    font-weight: 400;
    /*color-scheme: light dark;*/
    font-size: 16px;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }


  body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
  }

  h1 {
    font-size: 4rem;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 0;
  }

  h1, h2, h3, h4 {
    font-family: 'JetBrains Mono', monospace;
  }
`;