import React, { Component } from 'react'
import styled from 'react-emotion'

import { Link } from 'react-router-dom'

import smartphone from '../images/smartphone.svg'

import backgroundImage from '../images/char-sel/T_CharacterMenu_background.jpg'
import BtnStartStandard from '../images/char-sel/bttn_start_on.svg'
import BtnStartPress from '../images/char-sel/bttn_start_press.svg'

import Card from './Card'

const Container = styled('div')`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled('div')`
@media (orientation: portrait) {
    display: none;
}
  width: 100vw;
max-width: 1024px;
height: 100vh;
max-height: 600px;
padding: 2%;
background: url('${backgroundImage}') ;
background-size: contain;  
display: grid;
grid-gap: 0.5rem;
grid-template-rows: 5fr 2fr;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-areas: 
'easy linn baby bottle'
'. . . start';
justify-items:center;
align-items: center;
`

const StartButton = styled('div')`
  min-width: 80%;
  grid-area: start;
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

export default class CharacterScreen extends Component {
  componentDidMount() {
    this.props.resetCharacterScreen()
  }

  timedReset() {
    setTimeout(() => {
      this.props.resetCharacterScreen()
    }, 10000)
  }

  renderCards() {
    const bands = this.props.bands
    return bands.map((band, index) => {
      return (
        <Card
          name={band.name}
          picture={band.charPicture}
          sketch={band.charSketch}
          selectedCharacter={this.props.selectedCharacter}
          onClick={() => {
            this.props.chooseCharacter(index)
            this.timedReset()
          }}
        />
      )
    })
  }

  renderStartButton = () => {
    if (this.props.selectedCharacter !== null) {
      return (
        <StartButton>
          <Link to="/game">
            <img src={BtnStartPress} alt="" />
          </Link>
        </StartButton>
      )
    } else {
      return (
        <StartButton>
          <img src={BtnStartStandard} alt="" />
        </StartButton>
      )
    }
  }

  render() {
    return (
      <div className="container">
        <Wrapper id="wrapper">
          {this.renderCards()}
          {this.props.player.band !== null ? (
            <audio src={this.props.player.band.audio} autoPlay />
          ) : null}
          {this.renderStartButton()}
        </Wrapper>
        <SecondWrapper>
          <Text>This game is displayed in landscape mode only </Text>
          <img src={smartphone} alt="" />
        </SecondWrapper>
      </div>
    )
  }
}
