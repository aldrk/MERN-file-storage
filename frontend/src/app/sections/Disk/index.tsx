import {Box, Button} from "@material-ui/core"
import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getFiles} from "store/dispatchers/files"
import {State} from "store/store"
import FilesTable from "./FilesTable"

import style from "./style.module.scss"

const Disk = () => {
  const dispatch = useDispatch()
  const {currentDir} = useSelector((state: State) => state.files)

  useEffect(() => {
    dispatch(getFiles(currentDir))
  }, [currentDir])

  return (
    <div>
      <Box className={style.wrapper}>
        <div className={style.buttons}>
          <Button color="primary" variant="outlined">Назад</Button>
          <Button color="primary" variant="outlined">Создать папку</Button>
        </div>
        <FilesTable />
      </Box>
    </div>
  )
}

export default Disk