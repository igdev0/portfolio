import {GridColumStyled, GridStyled, GridStyledContainer} from './components/grid.styled.ts';
import {AppLeftSideStyled, AppRightCTAStyled, AppRightSideStyled, AppRootStyled, MeshGradient} from './app.styled.ts';
import ExperienceSection from './experience.tsx';
import {SectionStyled} from './components/section.styled.ts';
import EducationSection from './education.tsx';
import {MouseEventHandler, useCallback, useRef, useState} from 'react';
import {useScroll, useTransform} from 'framer-motion';
import {SECTIONS} from './const/content.ts';
import Navbar from './components/navbar.tsx';

const COLUMNS_COUT = 500;

function App() {
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    container: ref
  });
  const hidden = useTransform(() => {
    return scrollYProgress.get() > 0.1 ? '0%' : '-100%';
  });

  const handleMouseMove = useCallback<MouseEventHandler>((event) => {
    const {pageY, pageX} = event;
    setPageX(pageX);
    setPageY(pageY);
  }, []);
  return (
      <AppRootStyled ref={ref}>
        <Navbar hidden={hidden}/>
        <SectionStyled>
          <AppLeftSideStyled>
            <h1>Software engineer proficient in front-end development.</h1>
          </AppLeftSideStyled>
          <AppRightSideStyled>
            {
              SECTIONS.map((item, index) => (
                  <AppRightCTAStyled key={index} as="a" href={item.to} onMouseMove={handleMouseMove}>
                    <MeshGradient style={{originX: pageX, originY: pageY}}/>
                    <GridStyledContainer>
                      <GridStyled>
                        {
                          Array(COLUMNS_COUT).fill(null).map((_, index) => (
                              <GridColumStyled key={`${index}_column`} data-index={index}/>
                          ))
                        }
                      </GridStyled>
                    </GridStyledContainer>
                    <h2>{item.text}</h2>
                  </AppRightCTAStyled>
              ))
            }
          </AppRightSideStyled>
        </SectionStyled>
        <ExperienceSection/>
        <EducationSection/>
      </AppRootStyled>
  );
}

export default App;
