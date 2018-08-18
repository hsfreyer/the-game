import React, { Component } from 'react'
import styled from 'react-emotion'

import imgTileStandard from '../images/in-game/T_ig_tile_standard.svg'

export default class Tile extends Component {
  render() {
    const StyledTile = styled('img')`
      position: absolute;
      left: ${this.props.posx}%;
      bottom: ${this.props.posy}%;
      width: 5%;
    `

    return <StyledTile src={imgTileStandard} alt="no pic here" />
  }
}
