import React, { Component } from 'react'
import styled from 'react-emotion'

import { singleDice } from '../utils'

import imgBackground from '../images/in-game/T_ig_background.png'

import BandLogo from './BandLogo'
import Dice from './Dice'
import DiceResult from './DiceResult'
import CountDown from './CountDown'
import Event from './Event'
import Tile from './Tile'
import Pawn from './Pawn'

export default class GameScreen extends Component {
  componentDidMount() {
    this.countDown(this.props.countDownSequence)
  }

  countDown(images) {
    // console.log(images)
    images.forEach(image => {
      setTimeout(() => {
        this.props.updateCount(image)
      }, 1000)
    })
  }

  positionTiles() {
    const tiles = this.props.tiles
    return tiles.map((tile, index) => {
      return <Tile posx={tile.position.x} posy={tile.position.y} key={index} />
    })
  }

  pawnMovement(roll) {
    for (let i = 0; i < roll; i++) {
      setTimeout(() => this.props.movePawn(), 500)
    }
  }

  getEventImg() {
    const tile = this.props.player.tile || 1
    const event = this.props.tiles[tile - 1].event || null
    return event ? event : ' '
  }
  getEventAudio() {
    const tile = this.props.player.tile || 1
    const audio = this.props.tiles[tile - 1].audio || null
    return audio ? audio : ' '
  }
  render() {
    const StyledGame = styled('div')`
      width: 100%;
      height: 100vh;
      background-image: url('${imgBackground}');
      background-size: cover;
      overflow: hidden;
      position:relative;
      display: flex;
      justify-content: center;
    `
    return (
      <StyledGame className="overflow">
        <CountDown img={this.props.countDownImage} />

        <BandLogo img={this.props.player.band.gameImg} />
        {this.positionTiles()}
        <Dice
          img={this.props.dice.active.imgDice}
          onClick={() => {
            const roll = singleDice()
            this.props.rollDice(roll)
            this.pawnMovement(roll)
          }}
        />
        <Pawn
          posx={this.props.player.position.x}
          posy={this.props.player.position.y}
        />
        <DiceResult img={this.props.dice.active.imgResult} />
        <Event img={this.getEventImg()} audio={this.getEventAudio()} />
      </StyledGame>
    )
  }
}
