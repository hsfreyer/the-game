import { connect } from 'react-redux'
import GameScreen from '../components/GameScreen'
import { movePawn, rollDice, updateCount } from '../actions'

const mapStateToProps = state => ({
  tilePositions: state.tilePositions,
  player: state.player,
  dice: state.dice,
  countDownSequence: state.countDown.sequence,
  countDownImage: state.countDown.image
})

const mapDispatchToProps = dispatch => ({
  movePawn: position => dispatch(movePawn(position)),
  rollDice: () => dispatch(rollDice()),
  updateCount: image => dispatch(updateCount(image))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen)
