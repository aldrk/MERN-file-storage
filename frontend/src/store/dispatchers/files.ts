import {addFileActionCreator, setCurrentDirActionCreator, setFilesActionCreator} from "store/actions/files"
import {Dispatch} from "redux"
import API from "../../lib/api"

export const getFiles = (dirId: string) => (dispatch: Dispatch) => {
  try {
    API.get(`files${dirId ? `?parent=${dirId}` : ""}`, {
      headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
    }).then(({data}) => {
      dispatch(setFilesActionCreator(data))
    })
  } catch (e) {
    console.log(e)
  }
}

export const createDir = (dirId: string, name: string) => (dispatch: Dispatch) => {
  try {
    API.post("/files", {
      name,
      type: "dir",
      parent: dirId,
    }, {
      headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
    }).then(({data}) => {
      dispatch(addFileActionCreator(data))
    })
  } catch (e) {
    console.log(e)
  }
}