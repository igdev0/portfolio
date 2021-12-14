import styled from "styled-components";
import vars from "../../styles/vars";
import {darken, lighten} from "polished";

export const ProjectWrapper = styled.div`
  margin: 0;
  padding: 0;
  border-radius: .25em;
  overflow: hidden;
  transition: all ease-in-out .2s;
  background-color: ${({theme}) => theme.main === 'light' ? vars.colors.white : lighten(.3, vars.colors.black)};
  box-shadow: 0 0 1em 0 ${({theme}) => theme.main === 'light' ? lighten(.5, vars.colors.black) : vars.colors.black};
`

export const ProjectImageWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
`;

export const ProjectDescriptionWrapper = styled.div`
  margin: 0;
  padding: 0;
  font-size: .8rem;
  color: ${({theme}) => theme.main === 'light' ? vars.colors.black : vars.colors.white};
  p {
    margin-bottom: 0;
  }
`;

export const ProjectNameWrapper = styled.h3`
  margin-bottom: .5em;
  padding: 0;
  height: auto;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({theme}) => theme.main === 'light' ? vars.colors.black : vars.colors.white};
`

export const ProjectContentWrapper = styled.div`
  margin: 0;
  padding: 1em;
`

export const ProjectCollectionWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1em;
  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(10em, 15em)); 
  }
`

export const ProjectButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export interface ProjectButtonStyleProps  {
    $type?: string
}

export const ProjectButton = styled.a<ProjectButtonStyleProps>`
  margin: 0;
  padding: .1em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 3em;
    height: 3em;
  }
  background-color: ${({$type = "default", theme}) => $type === "github" ? vars.colors.wheat : lighten(.5, vars.colors.black)};
  color: ${({$type = "default"}) => $type === "github" ? vars.colors.black : vars.colors.wheat};
  transition: background-color ease-in-out .3s;
  &:hover {
    background-color: ${({$type = "default", theme}) => $type === "github" ? lighten(.1, vars.colors.wheat) : lighten(.6, vars.colors.black)};
  }
`;
