import styled, {css} from "styled-components";

export interface OverlayProps {
    visible: boolean;
}
export const OverlayWrapper = styled.div<OverlayProps>`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  pointer-events: none;
  opacity: 0;
  transition: all ease-in-out;
  ${({visible}) => visible ? css`pointer-events: auto; opacity: 1;` : ""}
`
