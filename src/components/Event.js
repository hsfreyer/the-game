import React, { Component } from 'react'
import styled from 'react-emotion'

export default class Event extends Component {
  render() {
    const StyledEvent = styled('img')`
      width: 60%;
      position: absolute;
      top: 10%;
      left: 20%;
    `

    return (
      <div>
        <StyledEvent src={this.props.img} alt="" />
        <audio src={this.props.audio} autoPlay="false" />
      </div>
    )
  }
}
