import styled from "styled-components"

export const Container = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #10192c;
  border-radius: 5px;
  border: 1px solid #5b6273;
  background-color: white;
  & .search-icon {
    color: #5b6273;
    height: 1em;
    margin-right: 10px;
  }
  & .clear-icon {
    cursor: pointer;
    color: #5b6273;
    height: 1.2em;
    margin-right: 10px;
    transition: color 0.3s ease-in;
    &:hover {
      color: #3e4c79;
    }
  }
`
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  color: #10192c;
  font-size: 1.2rem;

  border: 0;
  border-radius: 5px;
  outline: none;
  &::placeholder {
    color: #a8aab0;
  }
`
