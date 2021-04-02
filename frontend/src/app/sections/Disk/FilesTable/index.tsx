import React, {FC} from "react"
import {Table, TableBody, TableContainer, TablePagination} from "@material-ui/core"
import TableHeader from "./TableHeader"
import TableItem from "./TableItem"
import {Column, FileData} from "store/interfaces/files"

import style from "./style.module.scss"

type Props = {
  files: FileData[]
}

const FilesTable: FC<Props> = ({files}) => {
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
          <TableHeader />
          <TableBody>
            {files.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(file => <TableItem file={file} />)}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={files.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  )
}

export default FilesTable