import React, { Component } from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';

import TopNavbar from './components/TopNavbar';
import Section from './components/Section';

import logo from './logo.svg';

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

const themeBlue = {
  primary: '#214F6D',
  light: '#3D6B89',
  lighest: '#749CB3',
  dark: '#09324C',
  darkest: '#011623'
}

class App extends Component {
  render() {

    const navbarItems = [
      { name: 'Item1', url: '#' },
      { name: 'Item2', url: '#' },
      { name: 'Item3', url: '#' },
      { name: 'Item4', url: '#' },
      { name: 'Item5', url: '#' }
    ];

    return (
      <ThemeProvider theme={themeBlue}>
        <TopNavbar items={navbarItems} image={logo}></TopNavbar>
      </ThemeProvider>
    );
  }
}

export default App;
