import styled from "styled-components";
import {lighten} from "polished";
import vars from "../../styles/vars";

export const AboutIntroWrapper = styled.div`
  margin: 0;
  padding: 1em;
  height: auto;
  background-color: ${({theme}) => theme.main === 'light' ? lighten(.97, vars.colors.black) : lighten(.5, vars.colors.black)};
  border-radius: 0 1em 1em 1em;
  font-weight: 400;
  
  p {
    font-size: 1rem;
    color: ${({theme}) => theme.main === 'light' ? vars.colors.black : vars.colors.white};
  }
`;

