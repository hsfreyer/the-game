import React, { Component } from 'react'
import styled from 'react-emotion'

export default class DiceResult extends Component {
  render() {
    const StyledDiceResult = styled('img')`
      width: 7%;
      object-fit: contain;
      position: absolute;
      bottom: 50%;
      right: 5%;
    `

    return (
      <div>
        <StyledDiceResult src={this.props.img} />
      </div>
    )
  }
}
