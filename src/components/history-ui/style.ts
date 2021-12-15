import styled from "styled-components";
import vars from "../../styles/vars";
import {lighten} from "polished";

export const WorkExperienceWrapper = styled.div`
  margin: 0;
  padding: 1.5em 0;
  width: 100%;
  display: flex;
  
  
  .work-experience-date {
    width: 1.5em;
    display: flex;
    flex: .030;
    flex-direction: column;
    justify-content: space-between;
    color: ${vars.colors.green};
  }
  
  .work-experience-bar {
    width: 2em;
    margin: 0 1em;
    flex: .020;
    background-color: ${lighten(.5, vars.colors.black)};
  }
  
  .work-experience-content {
    flex: .95;
    color: ${({theme}) => theme.main === 'light' ? vars.colors.black : vars.colors.white};
  }
`
