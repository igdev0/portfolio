import styled from "styled-components";
import vars from "../../styles/vars";
import {lighten} from "polished";

export const PageWrapper = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  transition: background-color ease-in-out .2s;
  background-color: ${( {theme}) => theme.main === "light" ? vars.colors.white : lighten(.1, vars.colors.black)};
`

export const PageContentWrapper = styled.section`
  flex: 1;
  padding: 1em;
`
