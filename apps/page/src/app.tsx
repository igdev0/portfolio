import {main} from './style.css.ts';
import {Button} from './app.css.ts';


function App() {
  return (
      <div className={main}>
        <Button backgroundColor={{lightMode: "pink-500", darkMode: "blue-500"}}>
          Hello world
        </Button>
      </div>
  );
}

export default App;
