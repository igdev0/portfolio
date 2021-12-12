import styled from "styled-components";
import vars from "../../styles/vars";
import {AppThemeType} from "../../state/app";
import {lighten} from "polished";

export const MenuWrapper = styled.div<AppThemeType>`
  margin: 0;
  padding: 1em;
  height: 100%;
  position: sticky;
  top: 0;
  max-width: 15em;
  transition: background-color ease-in-out .3s;
  background-color: ${(props) => props.theme.main === 'dark' ? vars.colors.black : lighten(50, vars.colors.black) };
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
