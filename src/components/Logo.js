import React, { Component } from 'react'
import styled from 'react-emotion'

export default class Logo extends Component {
  render() {
    const StyledLogo = styled('img')`
      grid-area: ${this.props.area};
      width: 100%;
    `
    return <StyledLogo src={this.props.img} />
  }
}
