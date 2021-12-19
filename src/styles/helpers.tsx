import styled, {css} from "styled-components";
import vars from "./vars";


export const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 75%;
  height: auto;
  margin: 0 auto;
  padding: 0;

  @media screen and (min-width: 800px) {
    max-width: 90%;
  }
  @media screen and (min-width: 1200px) {
    max-width: 75%;
  }
`

export interface SpacerProps {
  top?: number,
  bottom?: number,
}

export const Spacer = styled.div<SpacerProps>`
  margin-top: ${({top = 0}) => `${top}em`};
  margin-bottom: ${({bottom = 0}) => `${bottom}em`};
`;

export const PageContentTitle = styled.h1`
  margin-bottom: 2em;
  font-size: 2rem;
  display: inline-block;
  position: relative;
  color: ${({theme}) => theme.main === 'light' ? vars.colors.black : vars.colors.white};
  font-weight: 600;
  &:after {
    content: "";
    position: absolute;
    bottom: -.5em;
    left: 0;
    width: 70%;
    height: .2em;
    background-color: ${vars.colors.green};
  }
  span {
    color: ${vars.colors.green}
  }
`
export const SkillsWrapper = styled.div`
  gap: .5em;
  display: inline-flex;
  flex-wrap: wrap;
`

interface SkillWrapperProps {
  $backgroundColor?: string;
  $textColor?: string;
}

export const SkillWrapper = styled.div<SkillWrapperProps>`
  margin: 0;
  padding: .5em 1em;
  height: auto;
  text-align: center;
  border-radius: .25em;
  user-select: none;
  background-color: ${({$backgroundColor}) => $backgroundColor??vars.colors.black};
  color: ${({$textColor}) => $textColor??vars.colors.white};
  font-size: .8rem;
`;

export const AboutSectionTitle = styled.h2`
  font-size: 1.8rem;
  color: ${({theme}) => theme.main === 'light' ? vars.colors.black : vars.colors.white};
  font-weight: 600;
`


export const MetaInfoWrapper = styled.div`
  margin: 0;
  padding: 1em 1em 0 1em;
  height: auto;
  border: 2px solid ${vars.colors.wheat};
  //border-top: 2px solid ${vars.colors.wheat};
  color: ${({theme}) => theme.main === 'light' ? vars.colors.black : vars.colors.white};
  span {
    display: block;
    margin: .5em 0;
  }
`
export const WorkExperienceDescription = styled.div`
  margin: 0;
  color: ${({theme}) => theme.main === 'light' ? vars.colors.black : vars.colors.white};
  padding: 1em 0;
  ul {
    padding-left: 1em;
    padding-bottom: 0;
    margin-bottom: 0;
  }
  ul li {
    list-style-type: disc;
  }
  strong {
    font-weight: 600;
  }
`

export const ContentWrapper = styled.div`
  margin: 0;
  padding: 0;
  color: ${({theme}) => theme.main === 'light' ? vars.colors.black : vars.colors.white};
  ul li {
    list-style-type: unset;
  }
  h2 {
    font-size: 1.2rem;
  }
  p {
    font-size: 1rem;
  }
  
  a {
    text-decoration: underline;
    text-decoration-color: ${vars.colors.green};
  }
`
