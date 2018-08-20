import React, { Component } from 'react'
import styled from 'react-emotion'

export default class Card extends Component {
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
  }
}
