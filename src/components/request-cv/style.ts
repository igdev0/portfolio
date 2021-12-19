import styled from "styled-components";
import vars from "../../styles/vars";
import {lighten} from "polished";

export const RequestCvWrapper = styled.div<any>`
  margin: 0;
  max-width: 960px;
  display: block;
  width: 100%;
  cursor: default;
  z-index: 1000;
  height: fit-content;
  background-color: ${({theme}) => theme.main === "light" ? vars.colors.white : lighten(.15, vars.colors.black)};
  border: 2px solid ${vars.colors.wheat};
  padding: 1em;
  position: relative;
  
  input {
    width: 100%;
    height: auto;
    padding: 1em;
    border: none;
    background-color: ${vars.colors.wheat};
  }
`
