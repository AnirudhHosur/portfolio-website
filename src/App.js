import './App.css';
import { Box } from '@mui/material';
import Appbar from './components/Appbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  return (
    <Box>
      <ThemeProvider theme={darkTheme}>
        <Appbar />
      </ThemeProvider>
    </Box>
  );
}

export default App;
