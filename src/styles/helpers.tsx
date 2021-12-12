import styled, {css} from "styled-components";


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
