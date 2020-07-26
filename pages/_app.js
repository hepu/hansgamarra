import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/global-styled-components'

import theme from '../styles/theme'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
