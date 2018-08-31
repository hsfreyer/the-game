import React, { Component } from 'react'
import styled from 'react-emotion'

import imgHighlight from '../images/in-game/T_dice_highlight.svg'
import imgDiceRoll from '../images/in-game/T_dice_mix.svg'

export default class Dice extends Component {
  render() {
    const StyledHighlight = styled('img')`
      ${this.props.hightlight ? '' : 'display:none'};
      width: 34%;
      overflow: hidden;
      position: absolute;
      bottom: -19%;
      right: -9%;
    `

    const StyledDice = styled('img')`
      width: 27%;
      overflow: hidden;
      position: absolute;
      bottom: -13%;
      right: -5%;
    `
    const AnimatedDiceroll = styled('img')`
      width: 36%;
      overflow: hidden;
      position: absolute;
      bottom: -19%;
      right: -9%;
    `

    return this.props.animation ? (
      <div>
        <AnimatedDiceroll src={imgDiceRoll} className="dice-roll-animation" />
      </div>
    ) : (
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
