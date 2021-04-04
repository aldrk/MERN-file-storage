import {Box, Button} from "@material-ui/core"
import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getFiles, searchFiles, uploadFile} from "store/dispatchers/files"
import {setCurrentDirAC} from "store/actions/files"
import {State} from "store/store"
import FilesTable from "./FilesTable"
import Modal from "./Modal"

import style from "./style.module.scss"
import FileUpload from "./FileUpload"
import Sort from "./Sort";
import Search from "../../components/Search";
import {useUpdateEffect} from "react-use"

const Disk = () => {
  const dispatch = useDispatch()
  const {currentDir, files, dirStack} = useSelector((state: State) => state.files)
  const [isModalOpen, setModalOpen] = useState(false)
  const [isDragEnter, setDragEnter] = useState(false)
  const [sortValue, setSortVale] = useState("")
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    dispatch(getFiles(currentDir, sortValue))
  }, [currentDir, sortValue])

  useUpdateEffect(() => {
    dispatch(searchFiles(searchValue))
  }, [searchValue])

  const onBackClickHandler = () => {
    const backDirId = dirStack.pop()

    dispatch(setCurrentDirAC(backDirId))
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

  return ( !isDragEnter ?
    <div>
      <Box className={style.wrapper} onDragEnter={dragEnter} onDragLeave={dragLeave} onDragOver={dragEnter}>
        <Modal open={isModalOpen} onClose={() => setModalOpen(false)}/>
        <div className={style.functions}>
          <Button color="primary" variant="outlined" onClick={onBackClickHandler}>Назад</Button>
          <Button color="primary" variant="outlined" onClick={() => setModalOpen(true)}>Создать папку</Button>
          <FileUpload onChange={onUpload}/>
          <Sort className={style.sort} sortValue={sortValue} setSortValue={setSortVale} />
          <Search defaultValue={searchValue} onChange={setSearchValue} />
        </div>
        {!!files.length ? <FilesTable files={files} /> : "Нет файлов"}
      </Box>
    </div>
      : <div className={style.dragArea} onDragEnter={dragEnter} onDragLeave={dragLeave} onDragOver={dragEnter} onDrop={onDrop}>Загрузить файл</div>
  )
}

export default Disk