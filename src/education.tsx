import {AppLeftSideStyled, AppRightSideStyled} from './app.styled.ts';
import {SectionStyled} from './components/section.styled.ts';

export default function EducationSection() {
  return (
      <>
        <SectionStyled>
          <AppLeftSideStyled style={{alignItems: "flex-start"}}>
            <h1 style={{position: "sticky", top: '40%'}}>Started learning in 2016</h1>
          </AppLeftSideStyled>
          <AppRightSideStyled style={{height: 2500, width: 'auto', backgroundColor: "#f1f1f1"}}>

          </AppRightSideStyled>
        </SectionStyled>
      </>
  );
}