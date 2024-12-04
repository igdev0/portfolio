import {AppLeftSideStyled, AppRightSideStyled} from '../app/app.styled.ts';
import {SectionStyled} from '../dri/section.styled.ts';
import content from '../../content.ts';
import {TechItemStyled, TechStackGroupStyled} from './tech-stack.styled.ts';

export default function TechStackScreen() {
  return (
      <SectionStyled id="tech-stack">
        <AppLeftSideStyled style={{alignItems: "start", position: "inherit", top: 0}}>
          <div style={{position: "sticky", top: '40%'}}>
            <h1>Depends on project, I use these tech</h1>
            <h4>I love learning new tech</h4>
          </div>
        </AppLeftSideStyled>
        <AppRightSideStyled style={{display: "block"}}>
          <h1>Tech stack</h1>
          <div style={{width: "100%", position: "relative"}}>

            {
              Object.keys(content.skills.technical_skills).map((techGroup, key) => {
                const techGroupContent = content.skills.technical_skills[techGroup as keyof object];

                return (
                    <TechStackGroupStyled key={`tech-group-${key}`}>
                      <h4>{techGroup}</h4>
                      {
                        Object.keys(techGroupContent).map((tech, index) => {
                          return (
                              <TechItemStyled key={`tech-${index}`} style={{backgroundColor: techGroupContent[tech]}}>
                                {tech}
                              </TechItemStyled>
                          );
                        })
                      }
                    </TechStackGroupStyled>
                );
              })
            }
          </div>
        </AppRightSideStyled>
      </SectionStyled>
  );
}