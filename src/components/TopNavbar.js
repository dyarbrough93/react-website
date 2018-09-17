/**
 * A navbar that spans the entire width of the screen
 *
 * @typedef Item Navlink item
 * @property {string} Item.name Name displayed in navbar
 * @property {string} Item.url Url that it links to
 *
 * Props for TopNavbar:
 * @param {Object[Item]} items Array of items
 * @param {svg} image Svg image logo
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from '../logo.svg';

const Header = styled.header`
  background-color: ${props => props.theme.dark || '#011823'};
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
    background-color: ${props => props.theme.primary || '#20536C'};
  }
`

const Image = styled.img`
  height: 2.75rem;
  overflow: hidden;
`

const Link = styled.a`
  color: ${props => props.theme.lightest || '#739DB2'};
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
                <ListItem><Image src={this.props.image}></Image></ListItem>

                {this.props.items.map(item => {
                  return <ListItem key={item.name}>
                           <Link href={item.url}>{item.name}</Link>
                         </ListItem>;
                })}

              </UnorderedList>
            </Nav>
          </Wrapper>
        </Header>
      </div>
    );
  }
}

// define proptypes
TopNavbar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired,
  // from styled-components theming
  theme: PropTypes.shape({
    primary: PropTypes.string,
    light: PropTypes.string,
    lightest: PropTypes.string,
    dark: PropTypes.string,
    darkest: PropTypes.string.isRequired
  })
}

export default TopNavbar;
