import React, { Component } from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';

import TopNavbar from './components/TopNavbar';
import Section from './components/Section';

// Color palette: http://paletton.com/#uid=15C0u0knNllbXAHiMqVtWeQIf6S

injectGlobal`
  body {
    font-family: arial;
  }
`

const themeRed = {
  primary: '#A82B2E',
  light: '#D5585B',
  veryLight: '#FD9FA1',
  dark: '#75080B',
  veryDark: '#360001'
}

const themeGreen = {
  primary: '#3B8F25',
  light: '#61B54B',
  veryLight: '#9CDE8B',
  dark: '#196306',
  veryDark: '#0A2E00'
}


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={themeGreen}>
        <TopNavbar></TopNavbar>
      </ThemeProvider>
    );
  }
}

export default App;
