import React from 'react';
import {Table, TableBody, TableContainer, TablePagination} from "@material-ui/core"
import TableHeader from "./TableHeader"
import TableItem from "./TableItem"
import {Column, FileData} from "store/interfaces/files"

import style from "./style.module.scss"

const columns: Column[] = [
  {id: "Name", label: "Name"},
  {id: "Date", label: "Date"},
  {id: "Size", label: "Size"}
]

function createData(name: string, date: string | Date, size: number): FileData {
  return {name, date, size}
}

const rows = [
  createData('MyFile', '10.03.2020', 10),
  createData('MyFile', '10.03.2020', 10),
  createData('MyFile', '10.03.2020', 10),
  createData('MyFile', '10.03.2020', 10),
  createData('MyFile', '10.03.2020', 10),
  createData('MyFile', '10.03.2020', 10),
]


const FilesTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className={style.table}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHeader columns={columns} />
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => <TableItem row={row} />)}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  )
}

export default FilesTable