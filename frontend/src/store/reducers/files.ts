import {FilesActions, FilesActionsType, FilesState} from "store/interfaces/files"

const defaultState: FilesState = {
  files: [],
  currentDir: "",
  dirStack: [],

  isLoading: false,
  error: null
}

const filesReducer = (state = defaultState, action: FilesActions): FilesState => {
  switch (action.type) {
    case FilesActionsType.SET_FILES: {
      return {
        ...state,
        files: action.payload,
        isLoading: false,
        error: null
      }
    }

    case FilesActionsType.SET_CURRENT_DIR: {
      return  {
        ...state,
        currentDir: action.payload,
        isLoading: false,
        error: null
      }
    }

    case FilesActionsType.ADD_FILE: {
      return {
        ...state,
        files: [...state.files, action.payload],
        isLoading: false,
        error: null
      }
    }

    case FilesActionsType.PUSH_TO_STACK: {
      return {
        ...state,
        dirStack: [...state.dirStack, action.payload],
        isLoading: false,
        error: null
      }
    }

    case FilesActionsType.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    }

    case FilesActionsType.REMOVE_FILE: {
      return {
        ...state,
        files: [...state.files.filter(file => file._id !== action.payload._id)]
      }
    }

    case FilesActionsType.FETCH_REQUEST: {
      return {
        ...state,
        isLoading: true
      }
    }

    default: return state
  }
}

export default filesReducer