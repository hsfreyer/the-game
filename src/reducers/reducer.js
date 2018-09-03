import Actions from '../actions'

export default (state, action) => {
  switch (action.type) {
    case Actions.UPDATE_COUNT:
      return {
        ...state,
        countDown: {
          ...state.countDown,
          image: action.payload,
        },
      }
    case Actions.ACTIVATE_DICE:
      return {
        ...state,
        dice: {
          ...state.dice,
          active: {
            ...state.dice.active,
            imgHighlight: true,
          },
        },
      }
    case Actions.DEACTIVATE_DICE:
      return {
        ...state,
        dice: {
          ...state.dice,
          active: {
            imgDice: state.dice.images.active,
            imgResult: null,
            imgHighlight: false,
          },
        },
      }
    case Actions.ROLL_DICE:
      const roll = action.payload
      return {
        ...state,
        dice: {
          ...state.dice,
          active: {
            ...state.dice.active,
            imgDice: state.dice.result[roll].imgDice,
            imgResult: state.dice.result[roll].imgResult,
            imgHighlight: false,
          },
        },
        player: {
          ...state.player,
          roll: roll,
        },
      }
    case Actions.SET_ANIMATION:
      return {
        ...state,
        dice: {
          ...state.dice,
          active: {
            ...state.dice.active,
            rollAnimation: action.payload,
          },
        },
      }
    case Actions.SET_RESULT_IMAGE:
      return {
        ...state,
        dice: {
          ...state.dice,
          active: {
            ...state.dice.active,
            imgResult: state.dice.result[action.payload].imgResult,
          },
        },
      }
    case Actions.MOVE_PAWN:
      if (state.player.tile === null) {
        return {
          ...state,
          player: {
            ...state.player,
            tile: 0,
          },
        }
      } else if (state.player.tile >= state.tiles.length - 1) {
        return state
      } else {
        return {
          ...state,
          isClickBlocked: true,
          player: {
            ...state.player,
            tile: state.player.tile + 1,
          },
        }
      }

    case Actions.CHOOSE_CHARACTER:
      return {
        ...state,
        isEvent: false,
        player: {
          ...state.player,
          band: state.bands[action.payload],
        },

        selectedCharacter: state.bands[action.payload].name,
      }
    case Actions.RESET_CHARACTERSCREEN:
      return {
        ...state,
        isEvent: false,
<<<<<<< HEAD
        player: { tile: 0, band: null, roll: null },
        selectedCharacter: null,
=======
>>>>>>> master
      }
    case Actions.SET_CLICK_BLOCK:
      return {
        ...state,
        isClickBlocked: action.payload,
      }
    case Actions.SET_IS_EVENT:
      return {
        ...state,
        isEvent: action.payload,
        dice: {
          ...state.dice,
          active: {
            ...state.dice.active,
            imgHighlight: false,
          },
        },
      }
    case Actions.SET_NEW_POSITION:
      return {
        ...state,
        isEvent: false,
        player: {
          ...state.player,
          tile: action.payload,
        },
      }
    default:
      return state
  }
}
