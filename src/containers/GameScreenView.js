import { connect } from 'react-redux'
import GameScreen from '../components/GameScreen'
import { rollDice } from '../actions'

const mapStateToProps = state => ({
  tilePositions: state.tilePositions
})

const mapDispatchToProps = dispatch => ({
  rollDice: tile => dispatch(rollDice())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen)
