import {FilesActionsType, setFilesAction, setCurrentDirAction, addFileAction} from "store/interfaces/files"

export const setFilesActionCreator = (payload: any[]):setFilesAction => ({type: FilesActionsType.SET_FILES, payload})
export const setCurrentDirActionCreator = (payload: string):setCurrentDirAction => ({type: FilesActionsType.SET_CURRENT_DIR, payload})
export const addFileActionCreator = (payload: string):addFileAction => ({type: FilesActionsType.ADD_FILE, payload})