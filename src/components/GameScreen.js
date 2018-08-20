import React, { Component } from 'react'
import styled from 'react-emotion'

import imgBackground from '../images/in-game/T_ig_background.png'

import BandLogo from './BandLogo'
import Dice from './Dice'
import imgDice from '../images/in-game/T_dice_06.svg'

import Tile from './Tile'
import Pawn from './Pawn'

export default class GameScreen extends Component {
  positionTiles() {
    const positions = this.props.tilePositions
    return positions.map((position, index) => {
      return <Tile posx={position.x} posy={position.y} key={index} />
    })
  }

  render() {
    const StyledGame = styled('div')`
      width: 100%;
      height: 100vh;
      background-image: url('${imgBackground}');
      background-size: cover;
      display: flex;
      justify-content: center;
    `

    return (
      <StyledGame>
        <BandLogo />
        {this.positionTiles()}
        <Dice img={imgDice} />
        <Pawn
          posx={this.props.player.position.x}
          posy={this.props.player.position.y}
        />
      </StyledGame>
    )
  }
}
