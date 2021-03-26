import { FilesState } from "../interfaces/files"

const defaultState: FilesState = {

}

const filesReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    default: return state
  }
}

export default filesReducer