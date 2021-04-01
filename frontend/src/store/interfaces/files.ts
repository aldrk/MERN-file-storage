export type FilesState = {
  files: any[]
  currentDir: string | null
}

export enum FilesActionsType {
  SET_FILES = "SET_FILES",
  SET_CURRENT_DIR = "SET_CURRENT_DIR"
}

export type setFilesAction = {
  type: FilesActionsType.SET_FILES
  payload: any[]
}

export type setCurrentDirAction = {
  type: FilesActionsType.SET_CURRENT_DIR,
  payload: string
}

export type FilesActions = setFilesAction | setCurrentDirAction

export type FileData = {
  name: string
  date: string | Date
  size: number
}

export type Column = {
  id: 'Name' | 'Date' | 'Size'
  label: string
}