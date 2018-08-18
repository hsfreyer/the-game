import React, { Component } from 'react'
import styled from 'react-emotion'

import imgLogoEasy from '../images/in-game/T_ig_logo_b1_easy.png'
import imgDisc from '../images/in-game/T_ig_disc.svg'

export default class BandLogo extends Component {
  render() {
    const StyledDisc = styled('img')`
      width: 18%;
      object-fit: contain;
      position: absolute;
      top: 20%;
      left: 7%;
    `

    const StyledBandLogo = styled('img')`
      width: 25%;
      object-fit: contain;
      position: absolute;
      top: 0%;
      left: 0%;
    `
    return (
      <div>
        <StyledDisc
          src={imgDisc}
          alt=" no pic here"
          className="disc-rotation"
        />
        <StyledBandLogo src={imgLogoEasy} alt=" no pic here" />
      </div>
    )
  }
}
