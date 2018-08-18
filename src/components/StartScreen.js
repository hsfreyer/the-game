import React, { Component } from 'react'
import styled from 'react-emotion'
import titleScreen from '../images/T_TitleScreen.png'
import { BrowserRouter as Link } from 'react-router-dom'

const Wrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  background-image: url('${titleScreen}');
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const StyledLink = styled('div')`
  width: 50px;
  height: 50px;
  border-bottom: 3px solid white;
  border-right: 3px solid white;
  transform: rotate(-45deg) skew(-20deg, -20deg);
`

export default class StartScreen extends Component {
  render() {
    return (
      <Wrapper>
        <Link style={{ textDecoration: 'none' }} to="/characters">
          <StyledLink />
        </Link>
      </Wrapper>
    )
  }
}
