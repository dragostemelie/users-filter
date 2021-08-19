import React from "react";
import { Container, Input } from "./Search.style";
import { Icons } from "../";

interface Props {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export const Search = ({ value, placeholder, onChange }: Props) => {
  return (
    <Container>
      <Input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      <Icons.Search />
    </Container>
  );
};
