export type FilesState = {
  files: any[]
  currentDir: string | null
}

export enum FilesActionsType {
  SET_FILES = "SET_FILES",
  SET_CURRENT_DIR = "SET_CURRENT_DIR",
  ADD_FILE = "ADD_FILE"
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

export type FilesActions = setFilesAction | setCurrentDirAction | addFileAction

export type FileData = {
  name: string
  date: string | Date
  size: number
}

export type Column = {
  id: 'Name' | 'Date' | 'Size'
  label: string
}