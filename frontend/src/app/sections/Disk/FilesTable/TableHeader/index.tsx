import React, {FC} from 'react';
import {TableRow, TableCell, TableHead} from "@material-ui/core"
import {Column} from "store/interfaces/files"

const columns: Column[] = [
  {id: "Name", label: "Name"},
  {id: "Date", label: "Date"},
  {id: "Size", label: "Size"}
]

const TableHeader: FC = () => {
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