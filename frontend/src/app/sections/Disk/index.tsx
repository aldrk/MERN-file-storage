import {Box, Button} from "@material-ui/core"
import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getFiles, uploadFile} from "store/dispatchers/files"
import {setCurrentDirActionCreator} from "store/actions/files"
import {State} from "store/store"
import FilesTable from "./FilesTable"
import Modal from "./Modal"

import style from "./style.module.scss"
import FileUpload from "./FileUpload"

const Disk = () => {
  const dispatch = useDispatch()
  const {currentDir, files, dirStack} = useSelector((state: State) => state.files)
  const [isModalOpen, setModalOpen] = useState(false)
  const [isDragEnter, setDragEnter] = useState(false)

  useEffect(() => {
    dispatch(getFiles(currentDir))
  }, [currentDir])

  const onBackClickHandler = () => {
    const backDirId = dirStack.pop()

    dispatch(setCurrentDirActionCreator(backDirId))
  }

  const onUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = [...event.target.files]

      files.forEach(file => dispatch(uploadFile(file, currentDir)))
    }
  }

  const dragEnter = (event: React.DragEvent) => {
    event.preventDefault()
    event.stopPropagation()

    setDragEnter(true)
  }

  const dragLeave = (event:React.DragEvent) => {
    event.preventDefault()
    event.stopPropagation()

    setDragEnter(false)
  }

  const onDrop = (event: React.DragEvent) => {
    event.preventDefault()
    event.stopPropagation()

    if (event.dataTransfer.files) {
      let files = [...event.dataTransfer.files]
    files.forEach((file: File)=> dispatch(uploadFile(file, currentDir)))
    }
    setDragEnter(false)
  }

  const onDownloadHandler = () => {
    console.log("meow")
  }

  return ( !isDragEnter ?
    <div>
      <Box className={style.wrapper} onDragEnter={dragEnter} onDragLeave={dragLeave} onDragOver={dragEnter}>
        <Modal open={isModalOpen} onClose={() => setModalOpen(false)}/>
        <div className={style.buttons}>
          <Button color="primary" variant="outlined" onClick={onBackClickHandler}>Назад</Button>
          <Button color="primary" variant="outlined" onClick={() => setModalOpen(true)}>Создать папку</Button>
          <FileUpload onChange={onUpload}/>
        </div>
        <FilesTable files={files} />
      </Box>
    </div>
      : <div className={style.dragArea} onDragEnter={dragEnter} onDragLeave={dragLeave} onDragOver={dragEnter} onDrop={onDrop}>ЗАГРУЗИ СЮДА СУКА</div>
  )
}

export default Disk