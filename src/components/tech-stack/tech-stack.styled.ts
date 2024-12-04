import styled from 'styled-components';
import {colors} from '../../vars';

export const TechStackLayout = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const TechStackColumn = styled.div`

`;

export const TechStackGroupStyled = styled.div`
  margin: 0 0 1rem 0;
  padding: 0;
  gap: .5rem;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
`;
export const TechItemStyled = styled.div`
  margin: 0;
  padding: .5rem 1rem;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  height: 100%;
  pointer-events: none;
  //cursor: pointer;
  font-family: "JetBrains Mono", sans-serif;
`;

export const TechItemHeaderStyled = styled.div`
  margin: 0;
  padding: 0;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  color: white;
  background: ${colors.purple};
  border-radius: 50%;
`;