import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #10192c;
  cursor: pointer;
  border: 2px solid #5b6273;
  border-radius: 5px;
  height: fit-content;
  transition: all 0.3s ease-in-out;
  &.deleted {
    opacity: 0;
  }
  & .delete-icon {
    opacity: 0;
    height: 1.2rem;
    color: #a8aab0;
    transition: color 0.3s ease-in;
    &:hover {
      color: white;
    }
  }
  &:hover {
    color: white;
    background-color: #3e4c79;
    border-color: #3e4c79;
    & .delete-icon {
      opacity: 1;
    }
  }
`;
export const Username = styled.span`
  flex: 1;
  font-size: 1.2rem;
`;
export const ClickCount = styled.span`
  width: 1.2rem;
  height: 1.2rem;
  font-size: 0.8rem;
  color: #a8aab0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid #a8aab0;
  border-radius: 50%;
`;
