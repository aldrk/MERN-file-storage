import {addFileActionCreator, setFilesActionCreator} from "store/actions/files"
import {Dispatch} from "redux"
import API from "../../lib/api"
import {FileData} from "../interfaces/files";

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

export const uploadFile = (file: File, dirId: string) => (dispatch: Dispatch) => {
  try {
    const formData = new FormData()
    formData.append("file", file)
    if (dirId) {
      formData.append("parent", dirId)
    }

    API.post("/files/upload", formData, {
      headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
      onUploadProgress: progressEvent => {
        const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
        if (totalLength) {
          let progress = Math.round((progressEvent.loaded * 100) / totalLength)
          console.log(progress)
        }
      }
    }).then(({data}) => {
      dispatch(addFileActionCreator(data))
    })
  } catch (e) {
    console.log(e)
  }
}