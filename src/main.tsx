import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Router } from './router/index';

import { Provider } from 'react-redux';
import { store } from './redux'

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF8F00',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
  typography: {
    fontSize: 20,
  }
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
