import {createGlobalStyle} from "styled-components";
import vars from "./vars";

export default createGlobalStyle`
  html {
    font-family: ${vars.font.primary};
    font-size: ${vars.rootSize}px;
    font-weight: normal;
    line-height: 1.25;
    background-color: ${vars.colors.white};
  }
`

