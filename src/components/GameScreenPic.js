import React, { Component } from 'react'
import styled from 'react-emotion'

export default class GameScreenPic extends Component {
  render() {
    const StyledGameScreenPic = styled('img')`
      position: absolute;
      left: ${this.props.posx}%;
      bottom: ${this.props.posy}%;
      width: 10%;
    `

    return <StyledGameScreenPic src={this.props.img} alt="no pic here" />
  }
}
