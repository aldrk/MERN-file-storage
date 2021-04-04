import React, {FC} from "react"
import {Button, Menu, MenuItem} from "@material-ui/core"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import {FileData} from "store/interfaces/files"
import {downloadFile} from "store/dispatchers/files"
import {useDispatch} from "react-redux"

import style from "./style.module.scss"

type Props = {
  file: FileData
}

const ContextMenu: FC<Props> = ({file}) => {
  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const {type} = file

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()

    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const onDownloadHandler = (event: React.MouseEvent) => {
    event.stopPropagation()

    dispatch(downloadFile(file))
  }

  return (
    <div className={style.contextMenuWrapper}>
      <Button onClick={handleClick}>
        <MoreVertIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {type !== "dir" &&<MenuItem className={style.menuItem}>
          <Button onClick={onDownloadHandler}>Download</Button>
        </MenuItem>}
        <MenuItem className={style.menuItem} onClick={handleClose}>My account</MenuItem>
        <MenuItem className={style.menuItem} onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default ContextMenu