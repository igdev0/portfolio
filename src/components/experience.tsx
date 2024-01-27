import {AppLeftSideStyled, AppRightSideStyled} from './app.styled.ts';
import {SectionStyled} from './section.styled.ts';
import {ExperienceBarStyled, ExperienceContentStyled, ExperienceStyled} from './experience.styled.ts';
import content from '../content.ts';

export default function ExperienceSection() {
  return (
      <SectionStyled id="work-experience">
        <AppLeftSideStyled style={{alignItems: "start", position: "inherit", top: 0}}>
          <h1 style={{position: "sticky", top: '40%'}}>In the business since 2017</h1>
        </AppLeftSideStyled>
        <AppRightSideStyled style={{display: "block"}}>
          <h1>Experience</h1>
          {
            content.experience.map((item, index) => (
                <ExperienceStyled key={`experience-${index}`}>
                  <ExperienceBarStyled/>
                  <ExperienceContentStyled>
                    <h3>{item.duration}</h3>
                    <h4>{item.company} / {item.location}</h4>
                    <h4>{item.position}</h4>
                    <p>{item.description}</p>
                    <ul>

                      {
                        item.accomplishments.map(item => (
                            <li>{item}</li>
                        ))
                      }
                    </ul>
                  </ExperienceContentStyled>
                </ExperienceStyled>
            ))
          }
        </AppRightSideStyled>
      </SectionStyled>
  );
}