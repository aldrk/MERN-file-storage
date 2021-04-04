import {FilesActions, FilesActionsType, FilesState} from "store/interfaces/files"

const defaultState: FilesState = {
  files: [],
  currentDir: "",
  dirStack: [],

  error: null
}

const filesReducer = (state = defaultState, action: FilesActions): FilesState => {
  switch (action.type) {
    case FilesActionsType.SET_FILES: {
      return {
        ...state,
        files: action.payload,
        error: null
      }
    }

    case FilesActionsType.SET_CURRENT_DIR: {
      return  {
        ...state,
        currentDir: action.payload,
        error: null
      }
    }

    case FilesActionsType.ADD_FILE: {
      return {
        ...state,
        files: [...state.files, action.payload],
        error: null
      }
    }

    case FilesActionsType.PUSH_TO_STACK: {
      return {
        ...state,
        dirStack: [...state.dirStack, action.payload],
        error: null
      }
    }

    case FilesActionsType.SET_ERROR: {
      return {
        ...state,
        error: action.payload
      }
    }

    case FilesActionsType.REMOVE_FILE: {
      return {
        ...state,
        files: [...state.files.filter(file => file._id !== action.payload._id)]
      }
    }

    default: return state
  }
}

export default filesReducer