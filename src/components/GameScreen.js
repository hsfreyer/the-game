import React, { Component } from 'react'
import styled from 'react-emotion'

import imgBackground from '../images/in-game/T_ig_background.png'

import BandLogo from './BandLogo'
import Dice from './Dice'
import DiceResult from './DiceResult'
import CountDown from './CountDown'

import Tile from './Tile'
import Pawn from './Pawn'

export default class GameScreen extends Component {
  countDown(images) {
    // console.log(images)
    images.forEach(image => {
      setTimeout(() => {
        this.props.updateCount(image)
      }, 1000)
    })
  }

  positionTiles() {
    const positions = this.props.tilePositions
    return positions.map((position, index) => {
      return <Tile posx={position.x} posy={position.y} key={index} />
    })
  }
  componentDidMount() {
    this.countDown(this.props.countDownSequence)
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
        <CountDown img={this.props.countDownImage} />

        <BandLogo />
        {this.positionTiles()}
        <Dice
          img={this.props.dice.active.imgDice}
          onClick={() => {
            this.props.rollDice()
            this.props.movePawn(1)
          }}
        />
        <DiceResult img={this.props.dice.active.imgResult} />
        <Pawn
          posx={this.props.player.position.x}
          posy={this.props.player.position.y}
        />
      </StyledGame>
    )
  }
}
