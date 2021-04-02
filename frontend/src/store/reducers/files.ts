import {FilesActions, FilesActionsType, FilesState} from "../interfaces/files"

const defaultState: FilesState = {
  files: [],
  currentDir: "",
  dirStack: []
}

const filesReducer = (state = defaultState, action: FilesActions): FilesState => {
  switch (action.type) {
    case FilesActionsType.SET_FILES: {
      return {
        ...state,
        files: action.payload
      }
    }

    case FilesActionsType.SET_CURRENT_DIR: {
      return  {
        ...state,
        currentDir: action.payload
      }
    }

    case FilesActionsType.ADD_FILE: {
      return {
        ...state,
        files: [...state.files, action.payload]
      }
    }

    case FilesActionsType.PUSH_TO_STACK: {
      return {
        ...state,
        dirStack: [...state.dirStack, action.payload]
      }
    }

    case FilesActionsType.POP_FROM_STACK:{
      return {
        ...state,
        dirStack: [...state.dirStack].slice(state.dirStack.length - 1, 1)
      }
    }

    default: return state
  }
}

export default filesReducer