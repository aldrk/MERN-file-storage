import {
  FilesActionsType,
  setFilesAction,
  setCurrentDirAction,
  addFileAction,
  pushToStackAction, popFromStackAction, uploadFileAction
} from "store/interfaces/files"

export const setFilesActionCreator = (payload: any[]):setFilesAction => ({type: FilesActionsType.SET_FILES, payload})
export const setCurrentDirActionCreator = (payload: string):setCurrentDirAction => ({type: FilesActionsType.SET_CURRENT_DIR, payload})
export const addFileActionCreator = (payload: string):addFileAction => ({type: FilesActionsType.ADD_FILE, payload})

export const pushToStackActionCreator = (payload: string):pushToStackAction => ({type: FilesActionsType.PUSH_TO_STACK, payload})
export const popFromStackActionCreator = (payload: string):popFromStackAction => ({type: FilesActionsType.POP_FROM_STACK, payload})

export const uploadFileActionCreator = (payload: any[]):uploadFileAction => ({type: FilesActionsType.UPLOAD_FILE, payload})