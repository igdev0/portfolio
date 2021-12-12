import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-size: inherit;
    margin-top: 0;
    margin-bottom: 0.5em;
  }

  a,
  button {
    cursor: pointer;
    text-decoration: none;
  }

  li {
    list-style : none;
  }
`
