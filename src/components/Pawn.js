import React, { Component } from 'react'
import styled from 'react-emotion'

import imgPawn from '../images/in-game/T_token_b1_easy.svg'

export default class Pawn extends Component {
  render() {
    const StyledPawn = styled('img')`
      position: absolute;
      left: ${this.props.posx}%;
      bottom: ${this.props.posy}%;
      width: 10%;
    `

    return <StyledPawn src={imgPawn} alt="no pic here" />
  }
}
