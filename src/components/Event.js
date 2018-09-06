import React, { Component } from 'react'
import styled from 'react-emotion'

import btnImg from '../images/in-game/bttn_continue_on.svg'

export default class Event extends Component {
  render() {
    const StyledEvent = styled('div')`
      width: 60%;
      height: 80%;
      position: absolute;
      top: 10%;
      left: 20%;
      background: url('${this.props.img}') no-repeat center center;
      background-size: contain;
    `
    const ButtonContinue = styled('img')`
      display: ${this.props.display};
      width: 25%;
      height: 25%;
      transform: rotate(12deg);
      position: relative;
      top: 60%;
      left: 80%;
    `

    return (
      <StyledEvent>
        <ButtonContinue src={btnImg} onClick={this.props.onClick} />
        <audio src={this.props.audio} autoPlay />
      </StyledEvent>
    )
  }
}
