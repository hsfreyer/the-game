import { connect } from 'react-redux'
import GameScreen from '../components/GameScreen'
import { movePawn, rollDice, updateCount } from '../actions'

const mapStateToProps = state => ({
  tiles: state.tiles,
  player: state.player,
  dice: state.dice,
  countDownSequence: state.countDown.sequence,
  countDownImage: state.countDown.image
})

const mapDispatchToProps = dispatch => ({
  movePawn: tile => dispatch(movePawn(tile)),
  rollDice: roll => dispatch(rollDice(roll)),
  updateCount: image => dispatch(updateCount(image))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen)
