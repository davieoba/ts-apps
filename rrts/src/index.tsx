import React from 'react'
import ReactDOM from "react-dom/client";
import { App } from './App'
import './index.css'
import { StyledEngineProvider } from '@mui/material';
import { ThemeProvider, createTheme } from "@mui/material/styles"


// ReactDOM.render(<App color='red' />, document.querySelector('#root'))

// const root = ReactDOM.createRoot()


const defaultTheme = createTheme()

const theme = createTheme({
  palette: {
    primary: {
      main: '#1760a5',
      light: 'skyblue',
    },
    secondary: {
      main: '#fff'
    },
    common: {
      white: '#fff'
    }
  },
  shape: {
    borderRadius: 8
  }
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
