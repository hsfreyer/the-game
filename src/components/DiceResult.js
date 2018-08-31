import React, { Component } from 'react'
import styled from 'react-emotion'

export default class DiceResult extends Component {
  render() {
    const StyledDiceResult = styled('img')`
      height: 20%;
      object-fit: contain;
      position: absolute;
      bottom: 50%;
      right: 5%;
    `

    return (
      <div>
        <StyledDiceResult src={this.props.img} className="dice-result-fade" />
      </div>
    )
  }
}
