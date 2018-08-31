import React, { Component } from 'react'
import styled from 'react-emotion'

import titleScreen from '../images/T_TitleScreen.jpg'
import smartphone from '../images/smartphone.svg'

const Wrapper = styled('div')`
  @media (orientation: portrait) {
    display: none;
  }
  width: 100%;
  height: 100%;
  background: url('${titleScreen}') no-repeat center center ;
  background-size: contain  ;
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
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
  render() {
    setTimeout(() => this.props.history.push('/characters'), 3000)

    return (
      <div className="container">
        <Wrapper />
        <SecondWrapper>
          <Text>This game is displayed in landscape mode only </Text>
          <img src={smartphone} alt="" />
        </SecondWrapper>
      </div>
    )
  }
}
