import React, { Component } from 'react'
import styled from 'react-emotion'

export default class CountDown extends Component {
  render() {
    const CountWrapper = styled('div')`
      height: 25%;
      width: 50%;
      display: flex;
      justify-content: space-around;
      position: absolute;
      bottom: 50%;
      left: 25%;
      z-index: 10;
    `

    const StyledCountDown = styled('img')`
      height: 100%;
    `

    return (
      <CountWrapper>
        <StyledCountDown src={this.props.img} />
      </CountWrapper>
    )
  }
}
