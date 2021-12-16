import {animated} from "react-spring";
import styled from "styled-components";
import vars from "../../styles/vars";
import {responsiveUnit} from "../../utils/utils";

export const ExpandableWrapper = styled(animated.div)`
  margin: 0;
  padding: 0;
  will-change: max-height;
  overflow: hidden;
  position: relative;
  padding-bottom: 1em;
`;

export const ExpandableButton = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: pointer;
  height: auto;
  padding: 1em;
  background: linear-gradient(${({theme}) => theme.main === 'light' ? "rgba(255,255,255,.9)" : "rgba(0,0,0, .2)"}, ${({theme}) => theme.main === 'light' ? "rgba(255,255,255,.9)" : "rgba(0,0,0)"});
  color: ${({theme}) => theme.main === 'light' ? vars.colors.black : vars.colors.white};
  z-index: 100;
  font-weight: bold;
  text-align: center;
  margin-left: 3.5em;
  @media screen and (min-width: 500px) {
    ${responsiveUnit({min: 20, max: 100, prop: "margin-left"})};
  }
`
