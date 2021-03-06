import { connect } from 'react-redux'
import CharacterScreen from '../components/CharacterScreen'
import {
  chooseCharacter,
  resetCharacterScreen,
  setClickBlock
} from '../actions'

const mapStateToProps = state => ({
  selectedCharacter: state.selectedCharacter,
  bands: state.bands,
  player: state.player,
  isClickBlocked: state.isClickBlocked
})

const mapDispatchToProps = dispatch => ({
  chooseCharacter: character => dispatch(chooseCharacter(character)),
  resetCharacterScreen: () => dispatch(resetCharacterScreen()),
  setClickBlock: bool => dispatch(setClickBlock(bool))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterScreen)
