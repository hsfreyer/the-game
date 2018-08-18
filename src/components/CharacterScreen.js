import React, { Component } from 'react'
import styled from 'react-emotion'
import { BrowserRouter as Link } from 'react-router-dom'

import backgroundImage from '../images/T_CharacterMenu_background.png'
import TEasy from '../images/T_cm_b1_easy.png'
import TLinn from '../images/T_cm_b2_linn.png'
import TBaby from '../images/T_cm_b3_baby.png'
import TBottle from '../images/T_cm_b4_bottle.png'
import BtnStart from '../images/bttn_start_on.svg'
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
  width: 20%;
`

export default class CharacterScreen extends Component {
  render() {
    return (
      <Container>
        <CardWrapper>
          <Card picture={TEasy} />
          <Card picture={TLinn} />
          <Card picture={TBaby} />
          <Card picture={TBottle} />
        </CardWrapper>
        <Link to="/game">
          <ImageWrapper>
            <Image src={BtnStart} alt="" />
          </ImageWrapper>
        </Link>
      </Container>
    )
  }
}
