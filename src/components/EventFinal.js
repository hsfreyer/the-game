import React, { Component } from 'react'
import styled from 'react-emotion'
import { Link } from 'react-router-dom'

import imgFinal from '../images/in-game/T_e7_pooca.png'
import btnRestart from '../images/in-game/bttn_playagain_on.svg'
import btnLink from '../images/in-game/bttn_goto_on.svg'

import audioFinal from '../audio/events/Ende Finaler Sound Timetable Pooca Bar.m4a'

export default class Event extends Component {
  render() {
    const StyledEvent = styled('div')`
      width: 70%;
      height: 90%;
      position: absolute;
      top: 5%;
      left: 15%;
      background: url('${imgFinal}') no-repeat center center;
      background-size: contain;
    `

    const LinkWrapper = styled('div')`
      position: relative;
      top: 35%;
      left: 80%;
      display: flex;
      flex-flow: column;
    `

    const ButtonLinkFB = styled('img')`
      width: 25%;
      height: 20%;
      transform: rotate(12deg);
    `
    const ButtonRestart = styled('img')`
      width: 25%;
      height: 20%;
      transform: rotate(12deg);
    `

    return (
      <StyledEvent>
        <LinkWrapper>
          <a
            target="_blank"
            href="https://www.facebook.com/events/1621256344650796/"
          >
            <ButtonLinkFB src={btnLink} alt="" />
          </a>
          <Link to="/characters">
            <ButtonRestart src={btnRestart} alt="" />
          </Link>
        </LinkWrapper>

        <audio src={audioFinal} autoPlay />
      </StyledEvent>
    )
  }
}
