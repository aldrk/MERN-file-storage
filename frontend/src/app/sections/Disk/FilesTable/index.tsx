import React, {FC} from "react"
import {Table, TableBody, TableContainer, TablePagination} from "@material-ui/core"
import TableHeader from "./TableHeader"
import TableItem from "./TableItem"
import {useSelector} from "react-redux"
import {State} from "store/store"
import {FileData} from "store/interfaces/files"

import style from "./style.module.scss"
import {Skeleton} from "@material-ui/lab";

type Props = {
  files: FileData[]
}

const FilesTable: FC<Props> = ({files}) => {
  const {isLoading} = useSelector((state: State) => state.files)

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const renderTable = () => {
    return (<TableContainer>
      <Table stickyHeader aria-label="sticky table">
        <TableHeader/>
        <TableBody>
          {files.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(file => <TableItem key={file._id}
                                                                                                    file={file}/>)}
        </TableBody>
      </Table>
    </TableContainer>)
  }

  return (
    <div className={style.table}>
      {isLoading ? <Skeleton className={style.skeleton}>{renderTable()}</Skeleton> : renderTable()}
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