import React, {FC, useState} from "react"
import { useUpdateEffect } from "react-use"
import {TextField} from "@material-ui/core"
import config from "config"

type Props = {
  defaultValue: string
  onChange: (value: string) => void
}

const Search: FC<Props> = ({defaultValue, onChange}) => {
  const [value, setValue] = useState<string>(defaultValue)

  useUpdateEffect(() => {
    const timer = setTimeout(() => onChange(value), config.inputTimeout)
    return () => clearTimeout(timer)
  }, [value])

  useUpdateEffect(() => {
    if (defaultValue) setValue(defaultValue)
  }, [defaultValue])

  return (
    <TextField value={value} onChange={(e) => setValue(e.target.value)} />
  );
};

export default Search