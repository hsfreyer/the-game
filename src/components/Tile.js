import React, { Component } from 'react'
import styled from 'react-emotion'

export default class Tile extends Component {
  render() {
    const StyledTile = styled('img')`
      position: absolute;
      left: ${this.props.posx}%;
      bottom: ${this.props.posy}%;
      width: 5%;
    `

    return <StyledTile src={this.props.img} alt="no pic here" />
  }
}
