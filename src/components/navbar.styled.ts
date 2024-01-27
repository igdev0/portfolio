import styled from 'styled-components';
import {AppRightCTAStyled} from '../app.styled.ts';
import {motion} from 'framer-motion';

export const NavbarStyled = styled(motion.nav)`
  margin: 0;
  padding: 0;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 100000;
  flex-direction: row;
  gap: 1rem;

  ${AppRightCTAStyled} {
    flex: 1;
    border-radius: 8px;
    background: white;
    font-family: 'JetBrains Mono', monospace;

    &:after {
      position: absolute;
      content: " ";
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1rem;
      background-image: radial-gradient(at 40% 20%, hsla(28, 100%, 74%, 1) 0px, transparent 50%),
      radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
      radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
      radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
      radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
      radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
      radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%);
    }
  }
`;