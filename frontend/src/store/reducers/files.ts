import {FilesActions, FilesActionsType, FilesState} from "../interfaces/files"

const defaultState: FilesState = {
  files: [],
  currentDir: ""
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

    default: return state
  }
}

export default filesReducer