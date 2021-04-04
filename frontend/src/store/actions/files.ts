import {
  FilesActionsType,
  setFilesAction,
  setCurrentDirAction,
  addFileAction,
  pushToStackAction, setErrorAction, FileData, removeFileAction
} from "store/interfaces/files"

export const setFilesAC = (payload: any[]):setFilesAction => ({type: FilesActionsType.SET_FILES, payload})
export const setCurrentDirAC = (payload: string):setCurrentDirAction => ({type: FilesActionsType.SET_CURRENT_DIR, payload})
export const addFileAC = (payload: string):addFileAction => ({type: FilesActionsType.ADD_FILE, payload})
export const removeFileAC = (payload: FileData): removeFileAction => ({type: FilesActionsType.REMOVE_FILE, payload})

export const pushToStackAC = (payload: string):pushToStackAction => ({type: FilesActionsType.PUSH_TO_STACK, payload})

export const setErrorAC = (payload: string):setErrorAction => ({type: FilesActionsType.SET_ERROR, payload})