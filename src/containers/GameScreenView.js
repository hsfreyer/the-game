import { connect } from 'react-redux'
import GameScreen from '../components/GameScreen'
import { movePawn } from '../actions'

const mapStateToProps = state => ({
  tilePositions: state.tilePositions,
  player: state.player
})

const mapDispatchToProps = dispatch => ({
  movePawn: position => dispatch(movePawn(position)),
  rollDice: () => dispatch(rollDice())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen)
