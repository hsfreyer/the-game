import React, { Component } from 'react'
import styled from 'react-emotion'
import titleScreen from '../images/T_TitleScreen.jpg'
import { Link } from 'react-router-dom'
import smartphone from '../images/smartphone.svg'

const Container = styled('div')`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Wrapper = styled('div')`
@media (orientation: portrait) {
    display: none;
    
}
  width: 100%;
  height: 100%;
  background-image: url('${titleScreen}');
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const SecondWrapper = styled('div')`
  @media (orientation: landscape) {
    display: none;
  }

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

const Text = styled('p')`
  @media (orientation: landscape) {
    display: none;
  }
  color: white;
  font-family: arial;
  font-size: 1.2rem;
  transform: rotate(-90deg);
  margin-left: 2rem;
`

export default class StartScreen extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Link style={{ textDecoration: 'none' }} to="/characters">
            <StyledLink />
          </Link>
        </Wrapper>
        <SecondWrapper>
          <Text>This game is displayed in landscape mode only </Text>
          <img src={smartphone} />
        </SecondWrapper>
      </Container>
    )
  }
}
