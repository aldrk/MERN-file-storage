import { TextField } from "@material-ui/core"
import React, {ChangeEvent, FC} from "react"
import cn from "classnames"

import style from "./style.module.scss"

type Props = {
  value: string
  onChange: (value: ChangeEvent<HTMLInputElement>) => void
  className?: string
  type: string
  placeholder: string
}

const Input: FC<Props> = ({className, type, placeholder, value, onChange}) => {
 return (
  <TextField
    value={value}
    onChange={onChange}
    type={type}
    className={cn(style.input, className)}
    label={placeholder}
    color="primary"
  />
 )
}

export default Input