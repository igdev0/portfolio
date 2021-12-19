import styled from "styled-components";
import {animated} from "react-spring";
import vars from "../../styles/vars";
import {lighten} from "polished";

export const Wrapper = styled(animated.div)`
  position: fixed;
  padding: 1em;
  width: 100%;
  z-index: 100000;
  height: 100%;
  left: 0;
  top: 0;
  background-color: ${({theme}) => theme.main === "dark" ? vars.colors.black : vars.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  transform: perspective(500px);
  flex-wrap: wrap;
  pointer-events: none;
`

export const SheetSvg = styled(animated.svg)`
  width: 7em;
  height: auto;
  margin: 1em;
`
export const TaskSvg = styled(animated.svg)`
  width: 15em;
  height: auto;
  margin: 1em;

`
export const CodingSvg = styled(animated.svg)`
  width: 10em;
  height: auto;
  margin: 1em;
`

export const IntroTitleWrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;
`

export const IntroTitle = styled.h1`
  font-size: 3rem;
  color: ${({theme}) => theme.main === "dark" ? vars.colors.white : vars.colors.black};
  width: 100%;
  height: fit-content;
  font-weight: 600;
  position: absolute;
  left: 1em;
  top: 0;
  right: 1em;
  bottom: 0;
  transform: translateY(4em);
  margin: auto;
  transition: all ease-in-out .2s;
  max-width: 25rem;
  
  @media screen and (min-width: 700px) {
    max-width: 39.5rem;
  }

  span {
    width: 100%;
    position: absolute;
    left: 0;
  }
`

export const AnimationContainer = styled.div`
  padding: 0;
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10rem;

`;
