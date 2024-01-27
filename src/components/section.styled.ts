import styled from 'styled-components';

export const SectionStyled = styled.section`
  position: relative;
  z-index: 10;
  width: 100%;
  min-height: 100vh;
  scroll-snap-align: start;
  left: 0;
  bottom: 0;
  top: 0;
  display: grid;
  grid-template-columns: .7fr 1fr;
  max-width: 1800px;
  margin: 0 auto;
`;