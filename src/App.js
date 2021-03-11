import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import ThemeProvider from 'ThemeProvider/ThemeProvider'
import GlobalStyle from 'styles/GlobalStyle'

import Routes from 'routes'

const App = () => (
  <ThemeProvider>
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
  </ThemeProvider>
)

export default App
