import { connect } from 'react-redux'
import CharacterScreen from '../components/CharacterScreen'
import { chooseCharacter } from '../actions'

const mapStateToProps = state => ({
  selectedCharacter: state.selectedCharacter,
  bands: state.bands,
})

const mapDispatchToProps = dispatch => ({
  chooseCharacter: character => dispatch(chooseCharacter(character)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CharacterScreen)
