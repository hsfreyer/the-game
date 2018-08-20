import React, { Component } from 'react'
import styled from 'react-emotion'

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
import Card from './Card'

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
  width: 15%;
`

export default class CharacterScreen extends Component {
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
    )
  }
}
