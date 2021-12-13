import {createGlobalStyle} from "styled-components";
import vars from "./vars";

export default createGlobalStyle`
  html {
    font-family: ${vars.font.primary};
    font-size: calc(${vars.rootSize - 9}px + .5vw);
    font-weight: normal;
    line-height: 1.25;
    background-color: ${vars.colors.white};
  }
  
  .color-green {
    color: ${vars.colors.green};
  }
`
