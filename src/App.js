import React from 'react';
import './App.css';
import Header from './components/Header';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Footer from './components/Footer';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Comic Sans Ms','Comic Neue'
    ].join(',')
  },
  palette: {
    primary: {
      main: '#973eb1',
    },
    secondary: {
      main: '#803597',
    },
  },
});

function App() {
  return (
    
    <ThemeProvider theme={theme}>
    <div className="App">
      <Header />
      <Footer /> 
    </div>
  </ThemeProvider>
    
  );
}

export default App;
