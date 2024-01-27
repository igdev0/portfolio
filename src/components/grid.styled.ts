import styled from 'styled-components';

export const GridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(20, 1fr);
  gap: 0;
  height: inherit;
`;

export const GridColumStyled = styled.div`
  //background-color: #fff;
  //border: 1px solid #333;
  //&:not()
  &:not(:nth-child(10)),
  &:not(:first-child),
  &:not(:last-child),
  &:not(:nth-child(90)) {
    border: .5px solid rgba(0, 0, 0, .025);
  }

  &:hover {
    &:not(:nth-child(10)),
    &:not(:first-child),
    &:not(:last-child),
    &:not(:nth-child(90)) {
      background: rgba(0, 0, 0, .025);
    }
  }

  z-index: 0;

  //&:first-child {
  //  border-right: 1px solid #fff;
  //  border-bottom: 1px solid #fff;
  //}
  //
  ////border: 1px solid red;
  //
  //&:last-child {
  //  border-bottom: 1px solid #fff;
  //  border-left: 1px solid #fff;
  //}
`;

export const GridStyledContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
`;