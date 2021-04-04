import React, {FC} from "react"
import {TableRow, TableCell} from "@material-ui/core"
import {FileData} from "store/interfaces/files"
import FolderIcon from "@material-ui/icons/Folder"
import DescriptionIcon from '@material-ui/icons/Description';
import {pushToStackAC, setCurrentDirAC} from "store/actions/files"
import {State} from "store/store"
import {useDispatch, useSelector} from "react-redux"
import {getFormattedFileSize} from "helpers/fileSize"

import style from "./style.module.scss"
import ContextMenu from "./ContextMenu";

type Props = {
  file: FileData
}

const TableItem: FC<Props> = ({file}) => {
  const dispatch = useDispatch()
  const {currentDir} = useSelector((state: State) => state.files)

  const onCLickHandler = () => {
    if (file.type === "dir") {
      dispatch(setCurrentDirAC(file._id))

      dispatch(pushToStackAC(currentDir))
    }
  }

  return (
    <TableRow onClick={onCLickHandler} hover role="checkbox">
      <TableCell align="left" className={style.nameCellWrapper}>
        {file.type === "dir" ? <FolderIcon/> : <DescriptionIcon/>}
        {file.name}
      </TableCell>
      <TableCell align="left">{file.date.toString().slice(0, 10)}</TableCell>
      <TableCell align="left">{getFormattedFileSize(file.size)}</TableCell>
      <TableCell align="left"><ContextMenu file={file}/></TableCell>
    </TableRow>
  )
}

export default TableItem