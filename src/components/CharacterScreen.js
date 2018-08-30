import React, { Component } from 'react'
import styled from 'react-emotion'

import { Link } from 'react-router-dom'

import smartphone from '../images/smartphone.svg'

import imgBackground from '../images/T_ig_background_clean.png'
import logoBackseat from '../images/T_Logo_Backseat.svg'
import logoWestside from '../images/T_Logo_Westside.svg'
import logoReeperbahn from '../images/T_Logo_Reeperbahn.svg'
import imgInstructions from '../images/char-sel/T_CharacterMenu_Intructions.svg'
import BtnStartStandard from '../images/char-sel/bttn_start_on.svg'
import BtnStartPress from '../images/char-sel/bttn_start_press.svg'

import Card from './Card'
import Logo from './Logo'

const Wrapper = styled('div')`
@media (orientation: portrait) {
    display: none;
}
  width: 100vw;
max-width: 1024px;
height: 100vh;
max-height: 600px;
padding: 2%;
background: url('${imgBackground}') no-repeat center center ;
background-size: 200%;  
display: grid;
grid-gap: 0.5rem;
grid-template-rows: 5fr 2fr;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-areas: 
'easy linn baby bottle'
'. instr instr start';
justify-items:center;
align-items: center;
`

const LogoWrapper = styled('div')`
  width: 100%;
  height: 80%;
  display: grid;
  grid-gap: 5%;
  gris-template-rows: 1fr 1fr;
  gris-template-columns: 1fr 1fr;
  grid-template-areas: 'backseat reeperbahn' 'westside reeperbahn';
  justify-items: center;
  align-items: center;
`

const Instructions = styled('div')`
  min-width: 80%;
  grid-area: instr;
`

const StartButton = styled('div')`
  min-width: 80%;
  grid-area: start;
`

const DisplayText = styled('p')`
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

    this.props.setClickBlock(false)
  }
  componentWillUnmount() {
    clearTimeout(this.reset)
  }

  timedReset() {
    this.reset = setTimeout(() => {
      this.props.resetCharacterScreen()
      this.props.setClickBlock(false)
    }, 5000)
  }

  renderCards() {
    const bands = this.props.bands
    return bands.map((band, index) => {
      return (
        <Card
          key={index}
          name={band.name}
          picture={band.charPicture}
          sketch={band.charSketch}
          selectedCharacter={this.props.selectedCharacter}
          onClick={
            this.props.isClickBlocked === true
              ? () => console.log('block')
              : () => {
                  this.props.setClickBlock(true)
                  this.props.chooseCharacter(index)
                  this.timedReset()
                }
          }
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
          <LogoWrapper>
            <Logo img={logoBackseat} area="backseat" />
            <Logo img={logoWestside} area="westside" />
            <Logo img={logoReeperbahn} area="reeperbahn" />
          </LogoWrapper>
          {this.renderStartButton()}
          <Instructions>
            <img src={imgInstructions} alt="" />
          </Instructions>
        </Wrapper>
        <SecondWrapper>
          <DisplayText>
            This game is displayed in landscape mode only{' '}
          </DisplayText>
          <img src={smartphone} alt="" />
        </SecondWrapper>
      </div>
    )
  }
}
