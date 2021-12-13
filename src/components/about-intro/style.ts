import styled from "styled-components";
import {lighten} from "polished";
import vars from "../../styles/vars";

export const AboutIntroWrapper = styled.div`
  margin: 0;
  padding: 1em;
  height: auto;
  background-color: ${lighten(.5, vars.colors.black)};
  border-radius: 0 1em 1em 1em;
  font-weight: 400;
`;
