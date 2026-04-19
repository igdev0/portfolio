import {Box, Layout} from './app.css.ts';
import {useState} from 'react';
import './styles/global/index.css.ts';

import type {Colors} from './styles/global/colors.css.ts';

function App() {
  const [color, setColor] = useState<Colors>("blue-400");
  return (
      <>
        <Box as="button" onClick={() => setColor("amber-500")}>Click</Box>
        <Layout>
          <Box.flex alignItems="center" backgroundColor={color}>
            Hello world
          </Box.flex>
          <Box>
            Hello world
          </Box>
          <Box>
            Hello world
          </Box>
        </Layout>
      </>
  );
}

export default App;
