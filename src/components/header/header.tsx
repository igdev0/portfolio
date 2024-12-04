import {SectionStyled} from '../dri/section.styled.ts';
import {AppLeftSideStyled, AppRightSideStyled} from '../app/app.styled.ts';
import {HeaderStyled} from './style.ts';

export default function Header() {
  return (
      <HeaderStyled>
        <SectionStyled>
          <AppLeftSideStyled>
            <div>
              <h1>I am a Software engineer.</h1>
              <h4>I write code and drink coffe.</h4>
            </div>
          </AppLeftSideStyled>
          <AppRightSideStyled>
            <img src="/public/Cross-platform software-amico.svg" alt="Cross platform" width="80%"/>
            {/*{*/}
            {/*  SECTIONS.map((item, index) => (*/}
            {/*      <AppRightCTAStyled key={index} as="a" href={item.to}>*/}
            {/*        <MeshGradient/>*/}
            {/*        <GridStyledContainer>*/}
            {/*          <GridStyled>*/}
            {/*            {*/}
            {/*              Array(1000).fill(null).map((_, index) => (*/}
            {/*                  <GridColumStyled key={`${index}_column`} data-index={index}/>*/}
            {/*              ))*/}
            {/*            }*/}
            {/*          </GridStyled>*/}
            {/*        </GridStyledContainer>*/}
            {/*        <h2>{item.text}</h2>*/}
            {/*      </AppRightCTAStyled>*/}
            {/*  ))*/}
            {/*}*/}
          </AppRightSideStyled>
        </SectionStyled>
      </HeaderStyled>
  );
}