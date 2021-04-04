export type FilesState = {
  files: FileData[]
  currentDir: string
  dirStack: Array<string>
  error: string | null
}

export enum FilesActionsType {
  SET_FILES = "SET_FILES",
  SET_CURRENT_DIR = "SET_CURRENT_DIR",
  ADD_FILE = "ADD_FILE",
  PUSH_TO_STACK = "PUSH_TO_STACK",
  UPLOAD_FILE = "UPLOAD_FILE",
  SET_ERROR = "SET_ERROR",
  REMOVE_FILE = "REMOVE_FILE"
}

export type setFilesAction = {
  type: FilesActionsType.SET_FILES
  payload: any[]
}

export type setCurrentDirAction = {
  type: FilesActionsType.SET_CURRENT_DIR,
  payload: string
}

export type addFileAction= {
  type: FilesActionsType.ADD_FILE,
  payload: any
}

export type pushToStackAction = {
  type: FilesActionsType.PUSH_TO_STACK,
  payload: string
}

export type uploadFileAction = {
  type: FilesActionsType.UPLOAD_FILE,
  payload: any
}

export type setErrorAction = {
  type: FilesActionsType.SET_ERROR,
  payload: string
}

export type removeFileAction = {
  type: FilesActionsType.REMOVE_FILE ,
  payload: FileData
}

export type FilesActions = setFilesAction | setCurrentDirAction | addFileAction | pushToStackAction | uploadFileAction | setErrorAction | removeFileAction

export type FileData = {
  _id: string
  type: string
  name: string
  date: string | Date
  size: number
}

export type Column = {
  id: 'Name' | 'Date' | 'Size'
  label: string
}