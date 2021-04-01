import React, {FC} from 'react';
import {TableRow, TableCell, TableHead} from "@material-ui/core"
import {Column} from "store/interfaces/files"

type Props = {
  columns: Column[]
}

const TableHeader: FC<Props> = ({columns}) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell key={column.id} align="left">{column.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default TableHeader