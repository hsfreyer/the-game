import { connect } from 'react-redux'
import GameScreen from '../components/GameScreen'
import {
  activateDice,
  deactivateDice,
  rollDice,
  setResultImage,
  setAnimation,
  updateCount,
  movePawn,
  setClickBlock,
  setIsEvent,
  setNewPosition
} from '../actions'

const mapStateToProps = state => ({
  tiles: state.tiles,
  player: state.player,
  dice: state.dice,
  countDownSequence: state.countDown.sequence,
  countDownImage: state.countDown.image,
  pics: state.gameScreenPics,
  isClickBlocked: state.isClickBlocked,
  isEvent: state.isEvent
})

const mapDispatchToProps = dispatch => ({
  deactivateDice: () => dispatch(deactivateDice()),
  activateDice: () => dispatch(activateDice()),
  rollDice: roll => dispatch(rollDice(roll)),
  setResultImage: roll => dispatch(setResultImage(roll)),
  setAnimation: bool => dispatch(setAnimation(bool)),
  movePawn: tile => dispatch(movePawn(tile)),
  updateCount: image => dispatch(updateCount(image)),
  setClickBlock: bool => dispatch(setClickBlock(bool)),
  setIsEvent: bool => dispatch(setIsEvent(bool)),
  setNewPosition: (newposition, newtile) =>
    dispatch(setNewPosition(newposition, newtile))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen)
