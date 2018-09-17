import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from '../logo.svg';

const Header = styled.header`
  background-color: ${props => props.theme.dark};
  position: relative;

  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-image: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 100%) 5%;
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
  font-size: 1rem;
  font-weight: bold;
  height: 100%;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;

  :hover {
    background-color: ${props => props.theme.primary};
  }

  :hover ${Link} {
    color: white;
  }

`

const LogoContainer = styled.h1`
  flex: 1;
  margin: 0;
  width: 50px;
  display: inline-block;
  font-size: 2.75rem;
  line-height: 3rem;
`
const Image = styled.img`
  height: 2.75rem;
  overflow: hidden;
`

const StyledSection = styled.section`
  height: 200px;
  background-color: ${props => props.theme.dark};
`

const Link = styled.a`
  color: ${props => props.theme.lightest};
  transition: all 0.2s ease;
  :link {text-decoration: none};
  ${ListItem}:hover & {
    color: white;
  }
`

class TopNavbar extends Component {

  render() {
    return (
      <div>
        <Header>
          <Wrapper>
            <Nav>
              <UnorderedList>
                <ListItem><Image src={logo}></Image></ListItem>

                {this.props.items.map(item => {
                  return <ListItem key={item.name}>
                           <Link href={item.url}>{item.name}</Link>
                         </ListItem>;
                })}

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
