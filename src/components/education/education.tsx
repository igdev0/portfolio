import {AppLeftSideStyled, AppRightSideStyled} from '../app/app.styled.ts';
import {SectionStyled} from '../dri/section.styled.ts';
import content from '../../content.ts';
import {ExperienceBarStyled, ExperienceContentStyled, ExperienceStyled} from '../experience/experience.styled.ts';

export default function EducationSection() {
  return (
      <>
        <SectionStyled>
          <AppLeftSideStyled style={{alignItems: "flex-start"}}>
            <h1 style={{position: "sticky", top: '40%'}}>Started learning in 2016</h1>
          </AppLeftSideStyled>
          <AppRightSideStyled style={{width: 'auto', display: "block"}}>
            <h1>Education</h1>
            {
              content.education.map((item, index) => (
                  <ExperienceStyled key={`experience-${index}`}>
                    <ExperienceBarStyled/>
                    <ExperienceContentStyled>
                      <h3>{item.duration}</h3>
                      <h4>{item.institution} / {item.location}</h4>
                      <p>{item.focus}</p>
                    </ExperienceContentStyled>
                  </ExperienceStyled>
              ))
            }
          </AppRightSideStyled>
        </SectionStyled>
      </>
  );
}