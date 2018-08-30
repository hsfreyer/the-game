import { connect } from 'react-redux'
import GameScreen from '../components/GameScreen'
import { movePawn, rollDice, updateCount, setClickBlock } from '../actions'

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
  setClickBlock: bool => dispatch(setClickBlock(bool))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen)
