import Header from '../components/ui/Header';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../components/ui/Theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' />
          <Route path='/services' />
          <Route path='/customsoftware' />
          <Route path='/mobileapps' />
          <Route path='/websites' />
          <Route path='/revolution' />
          <Route path='/about' />
          <Route path='/contact' />
          <Route path='/estimate' />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
