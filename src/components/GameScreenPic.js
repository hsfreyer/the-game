import React, { Component } from 'react'
import styled from 'react-emotion'

export default class GameScreenPic extends Component {
  render() {
    const StyledGameScreenPic = styled('img')`
      position: absolute;
      left: ${this.props.posx}%;
      bottom: ${this.props.posy}%;
      width: ${this.props.size}%;
    `

    return <StyledGameScreenPic src={this.props.img} alt="no pic here" />
  }
}
