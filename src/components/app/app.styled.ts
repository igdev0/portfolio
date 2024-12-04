import styled, {css} from 'styled-components';
import {motion} from 'framer-motion';

export const AppRootStyled = styled.div`
  width: 100%;
  position: absolute;
  height: 100%;
  scroll-behavior: smooth;
  overflow: auto;
  scroll-snap-type: both mandatory;
  scroll-snap-stop: always;
  left: 0;
  top: 0;
  right: 0;
`;

export const AppLeftSideStyled = styled.div`
  height: 100%;
  //padding-left: 4rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;

`;


export const AppRightSideStyled = styled(motion.div)`
  height: 100%;
  display: grid;
  width: 100%;
  //grid-template-columns: 1fr 1fr;
  align-items: center;
  right: 0;
  gap: 1rem;
  box-sizing: border-box;
  padding: 1rem;
`;

const GRADIENT = css`
  background-image: radial-gradient(at 40% 20%, hsla(28, 100%, 74%, 1) 0px, transparent 50%),
  radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
  radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
  radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
  radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
  radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
  radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%);
`;
export const MeshGradient = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100%;
  background-size: 200% 200%;
  ${GRADIENT};
`;
export const AppRightCTAStyled = styled.div`
  padding: 1rem;
  border-radius: 36px;
  overflow: hidden;
  position: relative;
  aspect-ratio: 1;
`;