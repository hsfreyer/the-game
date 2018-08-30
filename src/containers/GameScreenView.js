import { connect } from 'react-redux'
import GameScreen from '../components/GameScreen'
import { movePawn, rollDice, updateCount, toggleClickBlock } from '../actions'

const mapStateToProps = state => ({
  tiles: state.tiles,
  player: state.player,
  dice: state.dice,
  countDownSequence: state.countDown.sequence,
  countDownImage: state.countDown.image,
  pics: state.gameScreenPics,
  isClickBlocked: state.isClickBlocked
})

const mapDispatchToProps = dispatch => ({
  movePawn: tile => dispatch(movePawn(tile)),
  rollDice: roll => dispatch(rollDice(roll)),
  updateCount: image => dispatch(updateCount(image)),
  toggleClickBlock: () => dispatch(toggleClickBlock())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen)
