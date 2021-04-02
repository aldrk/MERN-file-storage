import {Box, Button} from "@material-ui/core"
import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {createDir, getFiles} from "store/dispatchers/files"
import {State} from "store/store"
import FilesTable from "./FilesTable"

import style from "./style.module.scss"

const Disk = () => {
  const dispatch = useDispatch()
  const {currentDir, files} = useSelector((state: State) => state.files)

  useEffect(() => {
    dispatch(getFiles(currentDir))
  }, [currentDir])

  const createDirHandler = () => {
    dispatch(createDir(currentDir, "juk"))
  }

  return (
    <div>
      <Box className={style.wrapper}>
        <div className={style.buttons}>
          <Button color="primary" variant="outlined">Назад</Button>
          <Button color="primary" variant="outlined" onClick={createDirHandler}>Создать папку</Button>
        </div>
        <FilesTable files={files} />
      </Box>
    </div>
  )
}

export default Disk