import React, { Component } from 'react'
import styled from 'react-emotion'

import BandLogo from './BandLogo'
import song from '../audio/Easy October - Song.wav'

export default class GameScreen extends Component {
  playSong() {
    document.querySelector('button').addEventListener('click', () => {
      let audioCtx = new (window.AudioContext || window.webkitAudioContext)()
      console.log(document.querySelector('audio'))
      const song = document.querySelector('audio')

      // Create a MediaElementAudioSourceNode
      // Feed the HTMLMediaElement into it
      const source = audioCtx.createMediaElementSource(song)
      source.connect(audioCtx.destination)
    })
  }
  render() {
    const StyledGame = styled('div')`
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
    `
    return (
      <StyledGame>
        <BandLogo />
        <audio src={song} />
        {this.playSong()}
      </StyledGame>
    )
  }
}
