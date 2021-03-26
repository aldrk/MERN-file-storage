import React, {FC} from "react"
import style from "./style.module.scss"
import cn from "classnames"

type Props = {
  className: string
}

const Container: FC<Props> = ({children, className}) => {
  return (
    <div className={cn(style.container, className)}>
      {children}
    </div>
  )
}

export default Container