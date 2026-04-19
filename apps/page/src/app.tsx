import {Button} from './app.css.ts';
import "./core/global.css.ts";

function App() {
  return (
      <div>
        <Button backgroundColor={{lightMode: "indigo-500", darkMode: "blue-500"}} padding="small">
          Hello world
        </Button>
        <Button padding="medium" backgroundColor={{lightMode: "blue-200"}}>
          Hello world
        </Button>
        <Button>
          Hello world
        </Button>
      </div>
  );
}

export default App;
