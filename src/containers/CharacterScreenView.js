import { connect } from 'react-redux'
import CharacterScreen from '../components/CharacterScreen'
import { chooseCharacter, resetCharacterScreen } from '../actions'

const mapStateToProps = state => ({
  selectedCharacter: state.selectedCharacter,
  bands: state.bands,
  player: state.player
})

const mapDispatchToProps = dispatch => ({
  chooseCharacter: character => dispatch(chooseCharacter(character)),
  resetCharacterScreen: () => dispatch(resetCharacterScreen())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterScreen)
