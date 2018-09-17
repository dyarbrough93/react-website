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
  lightest: '#FD9FA1',
  dark: '#75080B',
  darkest: '#360001'
}

const themeGreen = {
  primary: '#3B8F25',
  light: '#61B54B',
  lighest: '#9CDE8B',
  dark: '#196306',
  darkest: '#0A2E00'
}

class App extends Component {
  render() {

    const navbarItems = [
      { name: 'Item1', url: '#' },
      { name: 'Item2', url: '#' },
      { name: 'Item3', url: '#' },
      { name: 'Item4', url: '#' },
      { name: 'Item5', url: '#' },
    ];

    return (
      <ThemeProvider theme={themeRed}>
        <TopNavbar items={navbarItems}></TopNavbar>
      </ThemeProvider>
    );
  }
}

export default App;
