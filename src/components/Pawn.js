import React, { Component } from 'react'
import styled from 'react-emotion'

export default class Pawn extends Component {
  render() {
    const StyledPawn = styled('img')`
      position: absolute;
      left: ${this.props.posx}%;
      bottom: ${this.props.posy}%;
      width: 10%;
    `

    return <StyledPawn src={this.props.img} alt="no pic here" />
  }
}
