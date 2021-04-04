import React, {FC} from "react"
import {Button, Menu, MenuItem} from "@material-ui/core"

import style from "../FilesTable/TableItem/ContextMenu/style.module.scss"
import cn from "classnames";

type Props = {
  className: string
  sortValue: string
  setSortValue: (value: string) => void
}

const  Sort: FC<Props> = ({sortValue, setSortValue, className}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()

    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={cn(style.contextMenuWrapper, className)}>
      <Button onClick={handleClick}>
        {sortValue || "Сортировать"}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem className={style.menuItem} onClick={() => setSortValue("date")}>По дате</MenuItem>
        <MenuItem className={style.menuItem} onClick={() => setSortValue("name")}>По имени</MenuItem>
        <MenuItem className={style.menuItem} onClick={() => setSortValue("size")}>По размеру</MenuItem>
        <MenuItem className={style.menuItem} onClick={() => setSortValue("type")}>По типу</MenuItem>
      </Menu>
    </div>
  )
}

export default Sort