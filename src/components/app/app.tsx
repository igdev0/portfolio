import {AppRootStyled} from './app.styled.ts';
import ExperienceSection from '../experience/experience.tsx';
import EducationSection from '../education/education.tsx';
import {useRef} from 'react';
import {useScroll, useTransform} from 'framer-motion';
import Navbar from '../navbar/navbar.tsx';
import TechStackScreen from '../tech-stack/tech-stack.tsx';
import Header from '../header/header.tsx';


function App() {
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    container: ref
  });
  const hidden = useTransform(() => {
    return scrollYProgress.get() > 0.1 ? '0%' : '-100%';
  });

  return (
      <AppRootStyled ref={ref}>
        <Navbar hidden={hidden}/>
        <Header/>
        <TechStackScreen/>
        <ExperienceSection/>
        <EducationSection/>
      </AppRootStyled>
  );
}

export default App;
