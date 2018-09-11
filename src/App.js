import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';

const StyledApp = styled.div`
  text-align: center;
`

const StyledHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const StyledImg = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`

const AppTitle = styled.h1`
  font-size: large;
`

const AppIntro = styled.p`
  font-size: large;
`

class App extends Component {
  render() {
    return (
      <StyledApp>
        <StyledHeader>
          <StyledImg className="App-logo" src={logo} alt="logo" />
          <AppTitle>Welcome to React</AppTitle>
        </StyledHeader>
        <AppIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntro>
      </StyledApp>
    );
  }
}

export default App;
