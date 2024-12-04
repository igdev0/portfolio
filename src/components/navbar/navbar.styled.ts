import styled from 'styled-components';
import {AppRightCTAStyled} from '../app/app.styled.ts';
import {motion} from 'framer-motion';
import {colors} from '../../vars';

const MAX_WIDTH = 1800;
export const NavbarStyled = styled(motion.nav)`
  padding: 0;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 100000;
  flex-direction: row;
  gap: 1rem;
  max-width: ${MAX_WIDTH}px;
  margin: 0 auto;

  ${AppRightCTAStyled} {
    flex: 1;
    background: white;
    font-family: 'JetBrains Mono', monospace;
    border-radius: 0;

    &:after {
      position: absolute;
      content: " ";
      left: 0;
      bottom: 0;
      width: 100%;
      height: .5rem;
      background: ${colors.purple};
    }
  }
`;

export const NavbarItemStyled = styled.a`
  padding: 1rem;
  border-radius: 36px;
  overflow: hidden;
  position: relative;
`;