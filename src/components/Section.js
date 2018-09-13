import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  height: 200px;
  background-color: ${props => props.theme.dark};
`

class Section extends Component {
  render() {
    return (
      <StyledSection></StyledSection>
    );
  }
}

export default Section;
