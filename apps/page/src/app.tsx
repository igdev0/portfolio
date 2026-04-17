import {main} from './style.css.ts';
import {Box} from './app.css.ts';


function App() {
  return (
      <div className={main}>
        <Box color="gray-800" backgroundColor="blue-200" padding="large">Hello</Box>
      </div>
  );
}

export default App;
