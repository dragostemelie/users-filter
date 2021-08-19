import React from "react";
import { Container, Username, ClickCount } from "./User.style";
import { Icons } from "../";

interface Props {
  username: string;
  clickcount: number;
  className: string;
  onUserClick: () => void;
  onRemove: () => void;
}

export const User = ({
  username,
  clickcount,
  className,
  onUserClick,
  onRemove,
}: Props) => {
  return (
    <Container className={className}>
      <Username onClick={onUserClick}>{username}</Username>
      {clickcount !== 0 && <ClickCount>{clickcount}</ClickCount>}
      <Icons.Delete onClick={onRemove} />
    </Container>
  );
};
