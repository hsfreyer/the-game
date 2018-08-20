import { connect } from 'react-redux'
import GameScreen from '../components/GameScreen'
import { movePawn, rollDice } from '../actions'

const mapStateToProps = state => ({
  tilePositions: state.tilePositions,
  player: state.player,
  dice: state.dice
})

const mapDispatchToProps = dispatch => ({
  movePawn: position => dispatch(movePawn(position)),
  rollDice: () => dispatch(rollDice())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen)
