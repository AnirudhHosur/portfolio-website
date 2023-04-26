import './App.css';
import { Box } from '@mui/material';
import Appbar from './components/Appbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import LandingPage from './components/LandingPage';

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
    <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
        <Appbar />
        <Box marginTop="64px">
          <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/projects" element={<Projects />}/>
          </Routes>
        </Box>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
