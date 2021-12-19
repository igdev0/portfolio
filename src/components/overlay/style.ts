import styled, {css} from "styled-components";
import vars from "../../styles/vars";

export interface OverlayProps {
    visible: boolean;
}
export const OverlayWrapper = styled.div<OverlayProps>`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  opacity: 0;
  background-color: ${({theme}) => theme.main === "light" ? "rgba(255,255,255, .9)" : "rgba(0,0,0, .9)"};
  transition: all ease-in-out .3s;
  cursor: pointer;
  ${({visible}) => visible ? css`pointer-events: auto; opacity: 1;` : ""}
`

export const CloseOverlayWrapper = styled.div`
  margin: 0;
  padding: 0;
  height: auto;
  position: absolute;
  right: .5em;
  top: .5em;
  font-size: 1.2rem;
  line-height: .8;
  cursor: pointer;
`

export const Content = styled.div`
  margin: 0;
  padding: 0;
  
  h2 {
    color: ${vars.colors.black};
    font-size: 1.4rem;
  }
`
