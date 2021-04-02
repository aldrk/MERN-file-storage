import React, {FC} from "react"
import {TableRow, TableCell} from "@material-ui/core"
import {FileData} from "store/interfaces/files"
import FolderIcon from "@material-ui/icons/Folder"
import {pushToStackActionCreator, setCurrentDirActionCreator} from "store/actions/files"
import {State} from "store/store"
import {useDispatch, useSelector} from "react-redux"

import style from "./style.module.scss"

type Props = {
  file: FileData
}

const TableItem: FC<Props> = ({file}) => {
  const dispatch = useDispatch()
  const {currentDir} = useSelector((state: State) => state.files)

  const onCLickHandler = () => {
   if (file.type === "dir") {
     dispatch(setCurrentDirActionCreator(file._id))
     dispatch(pushToStackActionCreator(currentDir))
   }
  }

  return (
      <TableRow onClick={onCLickHandler} hover role="checkbox">
        <TableCell align="left" className={style.nameCellWrapper}>
          <FolderIcon />
          {file.name}
        </TableCell>
        <TableCell align="left">{file.date.toString().slice(0, 10)}</TableCell>
        <TableCell align="left">{file.size}</TableCell>
      </TableRow>
  )
}

export default TableItem