import {main} from './style.css.ts';
import {useRef} from 'react';
import {Button} from './app.css.ts';


function App() {
  const ref = useRef<HTMLButtonElement>(null);
  return (
      <div className={main}>
        <Button backgroundColor="red-500">
          Hello world
        </Button>
      </div>
  );
}

export default App;
