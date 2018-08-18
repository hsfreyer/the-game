import React, { Component } from 'react'
import styled from 'react-emotion'
import { get } from '../utils/helpers'

import BandLogo from './BandLogo'
import Dice from './Dice'
import Tile from './Tile'

export default class GameScreen extends Component {
  /* playSong() {
    document.querySelector('button').addEventListener('click', () => {
      let audioCtx = new (window.AudioContext || window.webkitAudioContext)()
      const song = get('audio')
      console.log(song)
      // Create a MediaElementAudioSourceNode
      // Feed the HTMLMediaElement into it
      const source = audioCtx.createMediaElementSource(song)
      source.connect(audioCtx.destination)
    })
  } */
  positionTiles() {
    const positions = this.props.tilePositions
    return positions.map((position, index) => {
      return <Tile posx={position.x} posy={position.y} key={index} />
    })
  }

  /*playSong() {
    const song = document.querySelector('audio')
    song.play()
    console.log(song)
  }*/

  render() {
    const StyledGame = styled('div')`
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
    `
    /* const btn = get('button')
    btn.addEventListener('click', e => this.playSong())*/
    return (
      <StyledGame>
        <BandLogo />
        {this.positionTiles()}
        <Dice />
      </StyledGame>
    )
  }
}
