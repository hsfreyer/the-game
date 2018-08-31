import React, { Component } from 'react'
import styled from 'react-emotion'

export default class Pawn extends Component {
  render() {
    const StyledPawn = styled('img')`
      position: absolute;
      left: ${this.props.tile.position.x - 2.5}%;
      bottom: ${this.props.tile.position.y}%;
      width: 10%;
    `

    return <StyledPawn src={this.props.img} alt="no pic here" />
  }
}
