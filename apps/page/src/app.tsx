import './styles/global/index.css';
import {Box} from './app.css';


function App() {
  return (
      <Box.grid
          gridTemplateColumns={{mobile: "2"}}
          alignItems="center"
          gap="sm"
          py="sm"
          px="lg">
        <Box backgroundColor="blue-400" p="sm">
          Test 1
        </Box>
        <Box>
          Test 2
        </Box>
      </Box.grid>
  );
}

export default App;
