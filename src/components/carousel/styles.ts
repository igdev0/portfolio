import styled from "styled-components";
import {animated} from "@react-spring/web";

export const Wrapper = styled.div`
  position: absolute;
  width: 50%;
  pointer-events: all;
  height: 100%;
  overflow: hidden;
  right: 0;
  top: 0;
  z-index: 1;
  background-color: transparent;
  -webkit-transform-style: preserve-3d;
  perspective: 1000px;
`;


export const Triangle = styled.div`
  width: 0;
  height: 0;
  pointer-events: none;
  border-left: 48em solid white;
  border-bottom: 9em solid transparent;
  position: absolute;
`

export const ItemWrapper = styled(animated.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;

  img {
    object-fit: cover;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
  }
`;
