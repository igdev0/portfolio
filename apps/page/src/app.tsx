import {Box, Layout} from './app.css.ts';
import "./styles/global/theme.css.ts";

function App() {
  return (
      <Layout>
        <Box.flex alignItems="center" backgroundColor="blue-400">
          Hello world
        </Box.flex>
        <Box>
          Hello world
        </Box>
        <Box>
          Hello world
        </Box>
      </Layout>
  );
}

export default App;
