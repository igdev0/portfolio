import styled from "styled-components";
import vars from "../../styles/vars";
import {lighten} from "polished";

export const WorkExperienceWrapper = styled.div`
  margin: 0;
  padding: 1.5em 0;
  width: 100%;
  display: inline-block;
  
  
  .work-experience-date {
    flex-basis: auto;
    display: inline-flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    gap: .5em;
    color: ${vars.colors.green};
    
    &__separator {
      width: 4rem;
      height: 5px;
      display: inline-block;
      background-color: ${vars.colors.wheat};
    }
  }
  
  .work-experience-bar {
    width: 2rem;
    flex-basis: auto;
    background-color: ${vars.colors.wheat};
  }
  
  .work-experience-content {
    flex-basis: auto;
    color: ${({theme}) => theme.main === 'light' ? vars.colors.black : vars.colors.white};
  }
`
