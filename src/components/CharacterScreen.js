import React, { Component } from 'react'
import styled from 'react-emotion'
<<<<<<< HEAD

import backgroundImage from '../images/T_CharacterMenu_background.png'
import TEasy from '../images/T_cm_b1_easy.png'
import TLinn from '../images/T_cm_b2_linn.png'
import TBaby from '../images/T_cm_b3_baby.png'
import TBottle from '../images/T_cm_b4_bottle.png'
import BtnStart from '../images/bttn_start_on.svg'
import BtnStartActive from '../images/bttn_start_press.svg'

import SketchEasy from '../images/T_cm_b1_illu_easy.svg'
import SketchLinn from '../images/T_cm_b2_illu_linn.svg'
import SketchBaby from '../images/T_cm_b3_illu_baby.svg'
import SketchBottle from '../images/T_cm_b4_illu_bottle.svg'
=======
import { Link } from 'react-router-dom'

import smartphone from '../images/smartphone.svg'

import backgroundImage from '../images/char-sel/T_CharacterMenu_background.jpg'
import BtnStart from '../images/char-sel/bttn_start_on.svg'
// import BtnStartPress from '../images/bttn_start_press.svg'
>>>>>>> master
import Card from './Card'

import imgEasy from '../images/char-sel/T_cm_b1_easy.jpg'
import imgLinn from '../images/char-sel/T_cm_b2_linn.jpg'
import imgBaby from '../images/char-sel/T_cm_b3_baby.jpg'
import imgBottle from '../images/char-sel/T_cm_b4_bottle.jpg'

import sketchEasy from '../images/char-sel/T_cm_b1_illu_easy.svg'
import sketchLinn from '../images/char-sel/T_cm_b2_illu_linn.svg'
import sketchBaby from '../images/char-sel/T_cm_b3_illu_baby.svg'
import sketchBottle from '../images/char-sel/T_cm_b4_illu_bottle.svg'

import audioBaby from '../audio/CharSel/Baby Jesus - Choose a band.m4a'
import audioEasy from '../audio/CharSel/Easy October - Choose a band.m4a'
import audioLinn from '../audio/CharSel/Linn Koch Emmery - Choose a band.m4a'
import audioBottle from '../audio/CharSel/Bottlecap - Choose a band.m4a'

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
background: url('${backgroundImage}') no-repeat center center;
background-size: contain;  
`
const CardWrapper = styled('div')`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const ImageWrapper = styled('div')`
  height: 25%;
  display: flex;
  justify-content: flex-end;
  padding-right: 2rem;
`

const Image = styled('img')`
  width: 15%;
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
<<<<<<< HEAD
  constructor(props) {
    super(props)
    this.state = {
      activePic: null,
      btnActive: false,
    }
  }
  render() {
    console.log(this.state)
    return (
      <Container>
        <CardWrapper>
          <Card
            picture={TEasy}
            sketch={SketchEasy}
            name="Easy"
            key="1"
            onClick={e => this.setState({ activePic: 'Easy' })}
            activeCard={this.state.activePic}
          />
          <Card
            picture={TLinn}
            sketch={SketchLinn}
            name="Linn"
            key="2"
            onClick={e => this.setState({ activePic: 'Linn' })}
            activeCard={this.state.activePic}
          />
          <Card
            picture={TBaby}
            sketch={SketchBaby}
            name="Baby"
            key="3"
            onClick={e => this.setState({ activePic: 'Baby' })}
            activeCard={this.state.activePic}
          />
          <Card
            picture={TBottle}
            sketch={SketchBottle}
            name="Bottle"
            key="4"
            onClick={e => this.setState({ activePic: 'Bottle' })}
            activeCard={this.state.activePic}
          />
        </CardWrapper>
        <ImageWrapper>
          <Image
            src={this.state.btnActive ? `${BtnStart}` : `${BtnStartActive}`}
            alt=""
            onClick={e => this.setState({ btnActive: true })}
          />
        </ImageWrapper>
      </Container>
=======
  componentDidMount() {
    this.props.resetCharacterScreen()
  }

  renderStartButton = () => {
    if (this.props.selectedCharacter !== null) {
      return (
        <Link to="/game">
          <ImageWrapper>
            <Image src={BtnStart} alt="" />
          </ImageWrapper>
        </Link>
      )
    } else {
      return (
        <ImageWrapper>
          <Image src={BtnStart} alt="" />
        </ImageWrapper>
      )
    }
  }
  // renderCards = () => {
  //   this.props.bands.map(band => {
  //     return (
  //       <Card
  //         name={band.name}
  //         picture={band.picture}
  //         sketch={band.sketch}
  //         audio={band.audio}
  //         selectedCharacter={this.props.selectedCharacter}
  //         onClick={e => this.props.chooseCharacter(`${band.name}`)}
  //       />
  //     )
  //   })
  // }
  render() {
    return (
      <div className="container">
        <Wrapper>
          <CardWrapper>
            <Card
              name="Easy"
              picture={imgEasy}
              sketch={sketchEasy}
              audio={audioEasy}
              selectedCharacter={this.props.selectedCharacter}
              onClick={() => this.props.chooseCharacter(0)}
            />
            <Card
              name="Linn"
              picture={imgLinn}
              sketch={sketchLinn}
              audio={audioLinn}
              selectedCharacter={this.props.selectedCharacter}
              onClick={() => this.props.chooseCharacter(1)}
            />
            <Card
              name="Baby"
              picture={imgBaby}
              sketch={sketchBaby}
              audio={audioBaby}
              selectedCharacter={this.props.selectedCharacter}
              onClick={() => this.props.chooseCharacter(2)}
            />
            <Card
              name="Bottle"
              picture={imgBottle}
              sketch={sketchBottle}
              audio={audioBottle}
              selectedCharacter={this.props.selectedCharacter}
              onClick={() => this.props.chooseCharacter(3)}
            />
          </CardWrapper>
          {this.renderStartButton()}
        </Wrapper>
        <SecondWrapper>
          <Text>This game is displayed in landscape mode only </Text>
          <img src={smartphone} alt="" />
        </SecondWrapper>
      </div>
>>>>>>> master
    )
  }
}
