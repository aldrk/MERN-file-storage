import React, {FC} from "react"
import {TableRow, TableCell} from "@material-ui/core"
import {FileData} from "store/interfaces/files"
import FolderIcon from "@material-ui/icons/Folder"

import style from "./style.module.scss"

type Props = {
  row: FileData
}

const TableItem: FC<Props> = ({row}) => {
  return (
      <TableRow hover role="checkbox">
        <TableCell align="left" className={style.nameCellWrapper}>
          <FolderIcon />
          {row.name}
        </TableCell>
        <TableCell align="left">{row.date}</TableCell>
        <TableCell align="left">{row.size}</TableCell>
      </TableRow>
  )
}

export default TableItem