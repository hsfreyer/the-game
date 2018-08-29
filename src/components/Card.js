import React, { Component } from 'react'
import styled from 'react-emotion'

export default class Card extends Component {
  autoplayCard = () => {
    const {
      picture,
      sketch,
      audio,
      name,
      selectedCharacter,
      onClick
    } = this.props

    const Wrapper = styled('div')`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `

    const CharacterCard = styled('img')`
      width: 70%;
      margin-bottom: 0;
      transform: ${selectedCharacter === name
        ? 'rotate(5deg) scale(1.2)'
        : 'rotate(0deg) scale(1)'};
    `

    if (selectedCharacter === name) {
      return (
        <Wrapper>
          <CharacterCard src={sketch} onClick={e => onClick()} />
          <audio src={audio} autoPlay="false" />
        </Wrapper>
      )
    } else {
      return (
        <Wrapper>
          <CharacterCard src={picture} onClick={e => onClick()} />
        </Wrapper>
      )
    }
  }
  render() {
    return <div>{this.autoplayCard()}</div>
  }
}
