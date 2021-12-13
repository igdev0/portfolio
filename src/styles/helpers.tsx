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
  font-size: 2.5rem;
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
  display: grid;
  grid-template-columns: repeat(auto-fit, 14rem);
`

interface SkillWrapperProps {
  $backgroundColor?: string;
  $textColor?: string;
}

export const SkillWrapper = styled.div<SkillWrapperProps>`
  margin: .5em;
  padding: .5em 1em;
  height: auto;
  text-align: center;
  border-radius: .25em;
  user-select: none;
  background-color: ${({$backgroundColor}) => $backgroundColor??vars.colors.black};
  color: ${({$textColor}) => $textColor??vars.colors.white};
`;

export const ContentWrapper = styled.div`
  p {
    font-size: 1rem;
    color: ${({theme}) => theme.main === 'light' ? vars.colors.black : vars.colors.white};
  }
`
