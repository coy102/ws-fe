import ReactDOM from 'react-dom/client'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import theme from './styles'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </BrowserRouter>,
)
