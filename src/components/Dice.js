import React, { Component } from 'react'
import styled from 'react-emotion'

import imgHighlight from '../images/in-game/T_dice_highlight.svg'

export default class Dice extends Component {
  render() {
    const StyledHighlight = styled('img')`
      width: 34%;
      object-fit: contain;
      position: absolute;
      bottom: -19%;
      right: -9%;
    `

    const StyledDice = styled('img')`
      width: 27%;
      object-fit: contain;
      position: absolute;
      bottom: -13%;
      right: -5%;
    `

    return (
      <div>
        <StyledHighlight
          src={imgHighlight}
          alt=" no pic here"
          className="dice-pump"
        />
        <StyledDice
          src={this.props.img}
          alt=" no pic here"
          onClick={this.props.onClick}
        />
      </div>
    )
  }
}
