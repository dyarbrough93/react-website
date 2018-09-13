import React, { Component } from 'react';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import logo from './logo.svg';

import TopNavbar from './components/TopNavbar';

// Color palette: http://paletton.com/#uid=15C0u0knNllbXAHiMqVtWeQIf6S

injectGlobal`
  body {
    font-family: arial;
  }
`

const theme = {
  redPrimary: '#A82B2E',
  redLight: '#D5585B',
  redVeryLight: '#FD9FA1',
  redDark: '#75080B',
  redVeryDark: '#360001'
}


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <TopNavbar></TopNavbar>
      </ThemeProvider>
    );
  }
}

export default App;
