import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import WorkflowDiagram from './App.tsx'

// Define a simple theme for consistency
const theme = createTheme({
  palette: {
    primary: {
      main: '#D2042D', // A dark red shade, matching the image
      light: '#FF6347', // A lighter red for connectors/active states
      dark: '#8B0000', // A darker red for backgrounds
    },
    background: {
      default: '#1a1a1a', // Dark background
      paper: '#333333',
    },
    text: {
      primary: '#ffffff', // White text
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#1a1a1a', // Ensure body background is dark
        },
      },
    },
  },
})


ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <WorkflowDiagram />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
)