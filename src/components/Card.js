import React, { Component } from 'react'
import styled from 'react-emotion'

export default class Card extends Component {
<<<<<<< HEAD
  constructor(props) {
    super(props)
    this.state = {
      activePicture: null,
    }
  }
  render() {
    // console.log(this.state.activePicture)
    // console.log(this.props.name)
    const CharacterCard = styled('div')`
       height: 62vh;
       width: 20vw;
       background-position: center;
       background-size: cover;
       background-image: url('${
         this.props.activeCard === this.props.name
           ? this.props.sketch
           : this.props.picture
       }');
       transform: ${
         this.props.activeCard === this.props.name
           ? 'rotate(5deg) scale(1.2) translate(2%, 5%);'
           : 'rotate(0deg)'
       };
      
       
       
      
`
    return (
      <div>
        <CharacterCard className="characterCard" onClick={this.props.onClick} />
      </div>
    )
=======
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
      height: 60vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `

    const CharacterCard = styled('img')`
      height: 100%;
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
>>>>>>> master
  }
}
