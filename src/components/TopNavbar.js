import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

const Header = styled.header`
  background-color: ${props => props.theme.dark};
  position: relative;

  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-image: linear-gradient(90deg, rgba(255,255,255,0) 25%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0) 75%) 5%;
  border-image-slice: 5%;
}
`

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const Nav = styled.nav`
  display: flex;
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
  height: 50px;
`

const ListItem = styled.li`
  padding: 0 30px;
  color: ${props => props.theme.veryLight};
  font-size: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  :hover {
    background-color: ${props => props.theme.primary};
    color: white;
  }

  @media (max-width: 600px) {
    padding: 0 10px;
  }

`

const LogoContainer = styled.h1`
  flex: 1;
  margin: 0;
  height: 100%;
`
const Image = styled.img`
  height: 3.125rem;
  overflow: hidden;
`

const StyledSection = styled.section`
  height: 20px;
  background-color: ${props => props.theme.dark};
`

class TopNavbar extends Component {

  render() {
    return (
      <div>
        <Header>
          <Wrapper>
            <Nav>
              <LogoContainer>
                <Image src={logo}></Image>
              </LogoContainer>
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
        <StyledSection></StyledSection>
      </div>
    );
  }
}

export default TopNavbar;
