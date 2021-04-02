import {Box, Button} from "@material-ui/core"
import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getFiles, uploadFile} from "store/dispatchers/files"
import {setCurrentDirActionCreator} from "store/actions/files"
import {State} from "store/store"
import FilesTable from "./FilesTable"
import Modal from "./Modal"

import style from "./style.module.scss"
import FileUpload from "./FileUpload";

const Disk = () => {
  const dispatch = useDispatch()
  const {currentDir, files, dirStack} = useSelector((state: State) => state.files)
  const [isModalOpen, setModalOpen] = useState(false)

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

  return (
    <div>
      <Box className={style.wrapper}>
        <Modal open={isModalOpen} onClose={() => setModalOpen(false)}/>
        <div className={style.buttons}>
          <Button color="primary" variant="outlined" onClick={onBackClickHandler}>Назад</Button>
          <Button color="primary" variant="outlined" onClick={() => setModalOpen(true)}>Создать папку</Button>
          <FileUpload onChange={onUpload}/>
        </div>
        <FilesTable files={files} />
      </Box>
    </div>
  )
}

export default Disk