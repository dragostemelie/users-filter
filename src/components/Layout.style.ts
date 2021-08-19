import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  height: 100vh;
`;
export const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 10px 20px;
  background-color: #f5f7f9;
  border-bottom: 1px solid #5b6273;
  & > * {
    width: calc(100% / 1 - 0px);
  }
  @media (min-width: 767px) {
    position: relative;
    width: 300px;
    height: auto;
    padding: 10px;
    border: 0;
    border-right: 1px solid #5b6273;
  }
`;
export const Article = styled.article`
  flex: 1;
  padding: 10px 20px;
  height: fit-content;
  max-height: calc(100vh - 60px);
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 60px;
  & > * {
    width: 100%;
  }
  @media (min-width: 767px) {
    margin-top: 0;
    max-height: 100vh;
    & > * {
      width: calc(100% / 4 - 10px);
    }
  }
  @media (min-width: 1920px) {
    & > * {
      width: calc(100% / 6 - 10px);
    }
  }
`;
