import {AppRootStyled} from './app.styled.ts';
import {useRef} from 'react';


function App() {
  const ref = useRef<HTMLDivElement>(null);
  return (
      <AppRootStyled ref={ref}>
      </AppRootStyled>
  );
}

export default App;
