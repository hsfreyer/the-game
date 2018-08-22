import React, { Component } from 'react'
import styled from 'react-emotion'
import { Link } from 'react-router-dom'

import backgroundImage from '../images/T_CharacterMenu_background.png'
import BtnStart from '../images/bttn_start_on.svg'
import BtnStartPress from '../images/bttn_start_press.svg'
import Card from './Card'

import imgEasy from '../images/T_cm_b1_easy.png'
import imgLinn from '../images/T_cm_b2_linn.png'
import imgBaby from '../images/T_cm_b3_baby.png'
import imgBottle from '../images/T_cm_b4_bottle.png'

import sketchEasy from '../images/T_cm_b1_illu_easy.svg'
import sketchLinn from '../images/T_cm_b2_illu_linn.svg'
import sketchBaby from '../images/T_cm_b3_illu_baby.svg'
import sketchBottle from '../images/T_cm_b4_illu_bottle.svg'

import audioBaby from '../audio/CharSel/Baby Jesus - Choose a band.m4a'
import audioEasy from '../audio/CharSel/Easy October - Choose a band.m4a'
import audioLinn from '../audio/CharSel/Linn Koch Emmery - Choose a band.m4a'
import audioBottle from '../audio/CharSel/Bottlecap - Choose a band.m4a'

const Container = styled('div')`
  width: 100vw;
  height: 100vh;
  background-image: url('${backgroundImage}');
  background-size: cover;
  
`
const CardWrapper = styled('div')`
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
  width: 20%;
`

export default class CharacterScreen extends Component {
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
      <Container>
        <CardWrapper>
          <Card
            name="Easy"
            picture={imgEasy}
            sketch={sketchEasy}
            audio={audioEasy}
            selectedCharacter={this.props.selectedCharacter}
            onClick={e => this.props.chooseCharacter('Easy')}
          />
          <Card
            name="Linn"
            picture={imgLinn}
            sketch={sketchLinn}
            audio={audioLinn}
            selectedCharacter={this.props.selectedCharacter}
            onClick={e => this.props.chooseCharacter('Linn')}
          />
          <Card
            name="Baby"
            picture={imgBaby}
            sketch={sketchBaby}
            audio={audioBaby}
            selectedCharacter={this.props.selectedCharacter}
            onClick={e => this.props.chooseCharacter('Baby')}
          />
          <Card
            name="Bottle"
            picture={imgBottle}
            sketch={sketchBottle}
            audio={audioBottle}
            selectedCharacter={this.props.selectedCharacter}
            onClick={e => this.props.chooseCharacter('Bottle')}
          />
        </CardWrapper>
        {this.renderStartButton()}
      </Container>
    )
  }
}
