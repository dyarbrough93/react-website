import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const Header = styled.header`
  background-color: ${props => props.theme.redDark};
`

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const Nav = styled.nav`
  align-items: center;
`

const UnorderedList = styled.ul`
  margin: 0;
  padding: 0;
  font-size: 0;
  flex: 1;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`

const ListItem = styled.li`
  display: inline-block;
  color: ${props => props.theme.redVeryLight};
  font-size: 16px;
  vertical-align: middle;
  cursor: pointer;
  transition: 0.4s ease;
  height: 100%;

  :hover {
    background-color: ${props => props.theme.redPrimary}
  }
`

class TopNavbar extends Component {

  render() {
    return (
      <Header>
        <Wrapper>
          <Nav>
            <UnorderedList>
              <ListItem>Item1</ListItem>
              <ListItem>Item2</ListItem>
              <ListItem>Item3</ListItem>
              <ListItem>Item4</ListItem>
              <ListItem>Item5</ListItem>
              <ListItem>Item6</ListItem>
            </UnorderedList>
          </Nav>
        </Wrapper>
      </Header>
    );
  }
}

export default TopNavbar;
