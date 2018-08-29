import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledContainer = styled('div')`
  @media (orientation: portrait) {
    background: black;
  }
  width: 100%;
  max-width: 1024px;
  height: 100%;
  max-height: 600px;
`

export default class Container extends Component {
  render() {
    return <StyledContainer />
  }
}
