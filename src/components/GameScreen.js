import React, { Component } from 'react'
import styled from 'react-emotion'

import { singleDice } from '../utils'

import imgBackground from '../images/T_ig_background_clean.png'

import BandLogo from './BandLogo'
import Dice from './Dice'
import DiceResult from './DiceResult'
import CountDown from './CountDown'
import Event from './Event'
import Tile from './Tile'
import GameScreenPic from './GameScreenPic'
import Pawn from './Pawn'

import smartphone from '../images/smartphone.svg'

const StyledGame = styled('div')`
      width: 100%;
      height: 100%;
      background: url('${imgBackground}') ;
      background-size: cover;
      overflow: hidden;
      position:relative;
      display: flex;
      justify-content: center;
      align-items: center;
    `

const Wrapper = styled('div')`
  @media (orientation: portrait) {
    display: none;
  }
  width: 100%;
  height: 100%;
`

const Text = styled('p')`
  @media (orientation: landscape) {
    display: none;
  }
  color: white;
  font-family: arial;
  font-size: 1.2rem;
  transform: rotate(-90deg);
  margin-left: 2rem;
`
const SecondWrapper = styled('div')`
  @media (orientation: landscape) {
    display: none;
  }

  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export default class GameScreen extends Component {
  componentWillMount() {
    this.props.setClickBlock(true)
  }

  componentDidMount() {
    this.countDown(this.props.countDownSequence)
  }

  countDown(images) {
    // console.log(images)
    images.forEach((image, index) => {
      setTimeout(() => {
        this.props.updateCount(image)
      }, 1000 * index)
    })
    setTimeout(() => {
      this.props.setClickBlock(false)
      this.props.activateDice()
    }, 1000 * (images.length - 1))
  }

  positionTiles() {
    const tiles = this.props.tiles
    return tiles.map((tile, index) => {
      return (
        <Tile
          img={tile.img}
          posx={tile.position.x}
          posy={tile.position.y}
          newposition={tile.newposition}
          key={index}
        />
      )
    })
  }

  positionPics() {
    const pics = this.props.pics
    return pics.map((pic, index) => {
      return (
        <GameScreenPic
          img={pic.img}
          size={pic.size}
          posx={pic.position.x}
          posy={pic.position.y}
          key={index}
        />
      )
    })
  }

  diceRoll() {
    const roll = singleDice()

    this.props.rollDice(roll)
    this.pawnMovement(roll)
  }

  pawnMovement(roll) {
    for (let i = 1; i < roll + 1; i++) {
      setTimeout(() => this.props.movePawn(), 500 * i)
    }
    setTimeout(() => {
      this.isEventOnTile()
        ? this.props.setIsEvent(true)
        : this.props.setClickBlock(false) && this.props.activateDice()
    }, 500 * (roll + 1))
  }

  isBlocked() {
    return this.props.isClickBlocked === true
  }
  isEventOnTile() {
    return this.props.tiles[this.props.player.tile].event != null
  }
  getEventImg() {
    const tile = this.props.player.tile || 1
    const event = this.props.tiles[tile].event || null
    return event ? event : ' '
  }
  getEventAudio() {
    const tile = this.props.player.tile || 1
    const audio = this.props.tiles[tile].audio || null
    return audio ? audio : ' '
  }
  continue() {
    const currentTile = this.props.player.tile
    const newTile = this.props.tiles[currentTile].newTile
    this.props.setIsEvent(false)
    this.props.setClickBlock(false)
    this.props.setNewPosition(newTile)
    this.props.activateDice()
  }

  render() {
    // console.log(this.props.dice.active.imgDice)
    return (
      <div className="container">
        <Wrapper>
          <audio src={this.props.player.band.song} autoPlay repeat="true" />

          <StyledGame className="overflow">
            <CountDown img={this.props.countDownImage} />

            <BandLogo img={this.props.player.band.gameImg} />
            {this.positionTiles()}
            {this.positionPics()}
            <Pawn
              tile={this.props.tiles[this.props.player.tile]}
              img={this.props.player.band.pawn}
            />
            <Dice
              img={this.props.dice.active.imgDice}
              hightlight={this.props.dice.active.imgHighlight}
              onClick={
                this.props.isClickBlocked === true
                  ? () => console.log('block')
                  : () => {
                      const roll = singleDice()
                      this.props.rollDice(roll)
                      this.pawnMovement(roll)
                    }
              }
            />

            <DiceResult
              img={this.isBlocked() ? this.props.dice.active.imgResult : null}
            />
            <Event
              display={this.props.isEvent ? 'block' : 'none'}
              img={this.props.isEvent ? this.getEventImg() : null}
              audio={this.props.isEvent ? this.getEventAudio() : null}
              onClick={() => this.continue()}
            />
          </StyledGame>
        </Wrapper>
        <SecondWrapper>
          <Text>This game is displayed in landscape mode only </Text>
          <img src={smartphone} alt="" />>
        </SecondWrapper>
      </div>
    )
  }
}
