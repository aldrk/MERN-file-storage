import { setCurrentDirActionCreator, setFilesActionCreator } from "store/actions/files"
import {Dispatch} from "redux"
import API from "../../lib/api"

export const getFiles = (dirId: string) => (dispatch: Dispatch) => {
  try {
    API.get(`files${dirId ? `?parent${dirId}` : ""}`, {
      headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
    }).then((data) => {
      console.log(data)
    })
  } catch (e) {
    console.log(e)
  }
}