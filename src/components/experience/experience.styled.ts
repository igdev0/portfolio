import styled from 'styled-components';
import {colors} from '../../vars';


export const ExperienceStyled = styled.div`
  margin: 0;
  padding: 1rem;
  width: 100%;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1rem 1fr;
`;

export const ExperienceRootStyled = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const ExperienceContentStyled = styled.div`
  margin: 0;
  padding: 0;
`;

export const ExperienceBarStyled = styled.div`
  margin: 0;
  padding: 0;
  width: 1rem;
  background: ${colors.purple};
`;