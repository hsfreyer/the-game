import React, { Component } from 'react'
import styled from 'react-emotion'

export default class CountDown extends Component {
  render() {
    const StyledCountDown = styled('img')`
      height: 25%;
      position: absolute;
      bottom: 50%;
      left: 40%;
      z-index: 10;
    `

    return <StyledCountDown src={this.props.img} />
  }
}
