import React, {FC, useState} from "react"
import {TextField, Modal as ModalWindow, Button} from "@material-ui/core"
import {Alert} from "@material-ui/lab"

import style from "./style.module.scss"
import {createDir} from "store/dispatchers/files"
import {useDispatch, useSelector} from "react-redux"
import {State} from "store/store"

type Props = {
  onClose: () => void
  open: boolean
}

const Modal: FC<Props> = ({onClose, open}) => {
  const dispatch = useDispatch()
  const {currentDir} = useSelector((state: State) => state.files)
  const [newDirName, setNewDirName] = useState("")
  const [isError, setError] = useState(false)

  const createDirHandler = () => {
    if (newDirName.length === 0) {
      setError(true)

      return
    }

    dispatch(createDir(currentDir, newDirName))
    setError(false)
    setNewDirName("")

    onClose()
  }

  return (
    <ModalWindow
      className={style.modal}
      open={open}
      onClose={onClose}
    >
      <div className={style.modalContent}>
        <TextField className={style.input} color="primary" value={newDirName} onChange={e => setNewDirName(e.target.value)} />
        <div className={style.buttonsWrapper}>
          <Button color="primary" variant="outlined" onClick={onClose}>Закрыть</Button>
          <Button color="primary" variant="outlined" onClick={createDirHandler}>Создать</Button>
        </div>
        {isError && <Alert className={style.alert} severity="warning">Please enter directory name</Alert>}
      </div>
    </ModalWindow>
  )
}

export default Modal