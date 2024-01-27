import {AppLeftSideStyled, AppRightSideStyled} from './app.styled.ts';
import {SectionStyled} from './components/section.styled.ts';

export default function ExperienceSection() {
  return (
      <SectionStyled>
        <AppLeftSideStyled style={{alignItems: "start", position: "inherit", top: 0}}>
          <h1 style={{position: "sticky", top: '40%'}}>In the business since 2017</h1>
        </AppLeftSideStyled>
        <AppRightSideStyled style={{height: 2500}}>
          <h1>Experience</h1>
        </AppRightSideStyled>
      </SectionStyled>
  );
}