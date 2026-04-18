import {main} from './style.css.ts';
import {Box} from './app.css.ts';
import {useRef} from 'react';


function App() {
  const ref = useRef<HTMLButtonElement>(null);
  return (
      <div className={main}>
        <Box color="white"
             ref={ref}
             backgroundColor="indigo-500"
             px="large"
             paddingY="small">
          Hello
        </Box>
      </div>
  );
}

export default App;
