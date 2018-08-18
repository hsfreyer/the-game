import React, { Component } from 'react'
import styled from 'react-emotion'

export default class Card extends Component {
  render() {
    const CharacterCard = styled('img')`
      height: 60vh;
    `
    return (
      <div>
        <CharacterCard src={this.props.picture} />
      </div>
    )
  }
}
