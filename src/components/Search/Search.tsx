import React from "react"
import { Container, Input } from "./Search.style"
import { Icons } from "../"

interface Props {
  value: string
  placeholder: string
  onChange: (value: string) => void
  onClearText: () => void
}

export const Search = ({
  value,
  placeholder,
  onChange,
  onClearText,
}: Props) => {
  return (
    <Container>
      <Input
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
      />
      {value.length > 0 ? (
        <Icons.Clear onClick={() => onClearText()} />
      ) : (
        <Icons.Search />
      )}
    </Container>
  )
}
