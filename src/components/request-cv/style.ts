import styled from "styled-components";
import vars from "../../styles/vars";

export const RequestCvWrapper = styled.div`
  margin: 0;
  max-width: 960px;
  display: block;
  width: 100%;
  cursor: default;
  z-index: 1000;
  height: fit-content;
  background-color: ${({theme}) => theme.main === "light" ? vars.colors.black : vars.colors.white};
  border: 2px solid ${vars.colors.wheat};
  padding: 1em;
  position: relative;
`
