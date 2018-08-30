import { connect } from 'react-redux'
import GameScreen from '../components/GameScreen'
import {
  movePawn,
  rollDice,
  updateCount,
  setClickBlock,
  setIsEvent,
  setNewPosition,
} from '../actions'

const mapStateToProps = state => ({
  tiles: state.tiles,
  player: state.player,
  dice: state.dice,
  countDownSequence: state.countDown.sequence,
  countDownImage: state.countDown.image,
  pics: state.gameScreenPics,
  isClickBlocked: state.isClickBlocked,
  isEvent: state.isEvent,
})

const mapDispatchToProps = dispatch => ({
  movePawn: tile => dispatch(movePawn(tile)),
  rollDice: roll => dispatch(rollDice(roll)),
  updateCount: image => dispatch(updateCount(image)),
  setClickBlock: bool => dispatch(setClickBlock(bool)),
  setIsEvent: bool => dispatch(setIsEvent(bool)),
  setNewPosition: (newposition, newtile) =>
    dispatch(setNewPosition(newposition, newtile)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameScreen)
