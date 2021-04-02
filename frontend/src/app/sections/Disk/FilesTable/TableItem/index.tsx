import React, {FC} from "react"
import {TableRow, TableCell} from "@material-ui/core"
import {FileData} from "store/interfaces/files"
import FolderIcon from "@material-ui/icons/Folder"

import style from "./style.module.scss"

type Props = {
  file: FileData
}

const TableItem: FC<Props> = ({file}) => {
  return (
      <TableRow hover role="checkbox">
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