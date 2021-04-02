import React, {FC} from "react"

import style from "./style.module.scss"

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FileUpload: FC<Props> = ({onChange}) => {
  return (
    <div>
      <label className={style.label} htmlFor="fileUpload">
        Загрузить файл
      </label>
      <input multiple onChange={onChange} className={style.input} type="file" id="fileUpload"/>
    </div>
  )
}

export default FileUpload