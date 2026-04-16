import {useEffect, useRef} from 'react';
import Box from './components/box';


function App() {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (ref.current) {
      console.log(ref.current.getBoundingClientRect());
    }
  }, [ref]);
  return (
      <div>
        <Box as="button" onClick={console.log}>Hello</Box>
      </div>
  );
}

export default App;
