import {animated} from "react-spring";
import styled from "styled-components";
import vars from "../../styles/vars";

export const ExpandableWrapper = styled(animated.div)`
  margin: 0 -1em;
  padding: 0 1em;
  will-change: max-height;
  overflow: hidden;
  position: relative;
  padding-bottom: 4em;
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
  background: linear-gradient(transparent, ${({theme}) => theme.main === 'light' ? "rgba(255,255,255,1)" : "rgba(0,0,0)"});
  z-index: 100;
  font-weight: bold;
  text-align: center;
  span {
    display: inline-block;
    padding: .5em 1em;
    border-radius: .5em;
    background-color: ${vars.colors.wheat};
  }
  
`
