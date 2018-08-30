import React, { Component } from 'react'
import styled from 'react-emotion'

export default class Card extends Component {
  autoplayCard = () => {
    const { picture, sketch, name, selectedCharacter, onClick } = this.props

    const CharacterCard = styled('img')`
      max-width: 100%;
      grid-area: ${name};
      transform: ${selectedCharacter === name
        ? 'rotate(5deg) scale(1.2)'
        : 'rotate(0deg) scale(1)'};
    `

    if (selectedCharacter === name) {
      return <CharacterCard src={sketch} onClick={e => onClick()} />
    } else {
      return <CharacterCard src={picture} onClick={e => onClick()} />
    }
  }
  render() {
    return this.autoplayCard()
  }
}
