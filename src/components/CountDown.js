import React, { Component } from 'react'
import styled from 'react-emotion'

export default class CountDown extends Component {
  render() {
    const StyledCountDown = styled('img')`
      width: 10%;
      object-fit: contain;
      position: absolute;
      bottom: 50%;
      right: 50%;
    `

    return (
      <div>
        <StyledCountDown src={this.props.img} />
      </div>
    )
  }
}
