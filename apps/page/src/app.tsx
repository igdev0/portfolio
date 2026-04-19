import './styles/global/index.css';
import {Box, Layout} from './app.css';
import {useState} from 'react';
import type {Colors} from './styles/global/colors.css';


function App() {
  const [color, setColor] = useState<Colors>("blue-400");
  return (
      <Layout.flex>
        <Box as="button" onClick={() => setColor("red-300")}>Click</Box>
        <Layout>
          <Box.flex
              alignItems="center"
              backgroundColor={color}
              py="sm"
              px="lg">
            Hello world
          </Box.flex>
          <Box>
            Hello world
          </Box>
          <Box>
            Hello world
          </Box>
        </Layout>
      </Layout.flex>
  );
}

export default App;
