import styled from "styled-components";
import vars from "../../styles/vars";
import {lighten} from "polished";

export const MenuWrapper = styled.div`
  margin: 0;
  padding: 2em;
  height: 100%;
  position: sticky;
  top: 0;
  max-width: 15em;
  transition: background-color ease-in-out .3s;
  background-color: ${(props) => props.theme.main === 'dark' ? vars.colors.black : lighten(.9, vars.colors.black)};

  &:before,
  &:after {
    position: absolute;
    content: "";
    z-index: 1;
    width: 5em;
    height: 5em;
    margin: 0;
    padding: 0;
  }

  &:before {
    top: 0;
    right: 0;
    border-top: 1em solid ${(props) => props.theme.main === 'dark' ? lighten(.5, vars.colors.black) : lighten(.2, vars.colors.black)};
    border-right: 1em solid ${(props) => props.theme.main === 'dark' ? lighten(.5, vars.colors.black) : lighten(.2, vars.colors.black)};
  }

  &:after {
    bottom: 0;
    left: 0;
    border-bottom: 1em solid ${(props) => props.theme.main === 'dark' ? lighten(.5, vars.colors.black) : lighten(.2, vars.colors.black)};
    border-left: 1em solid ${(props) => props.theme.main === 'dark' ? lighten(.5, vars.colors.black) : lighten(.2, vars.colors.black)};
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-height: 10em;
  max-width: 10em;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
`

export const MenuLinks = styled.div`
  margin: 0;
  padding: 0;
  display: inline-flex;
  flex-direction: column;
`;

interface MenuLinkWrapperProps {
    active: boolean
}

export const MenuLinkWrapper = styled.a<MenuLinkWrapperProps>`
  margin: 0;
  padding: 1em 0;
  position: relative;
  width: fit-content;
  text-transform: uppercase;
  color: ${(props) => props.theme.main === 'dark' ? vars.colors.white : vars.colors.black};

  &:after {
    content: "";
    transition: width ease-in-out .2s;
    position: absolute;
    width: ${({active}) => active ? '70%' : "0"};
    left: 0;
    height: .25em;
    background-color: ${vars.colors.green};
    bottom: .5em;
  }

  &:hover {
    &:after {
      width: 70%;
    }
  }
`
