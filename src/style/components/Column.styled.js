import styled from "styled-components";

export const ColumnContainer = styled.div`
  width: 20%;

  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  background-color: white;

  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.h3`
  padding: 8px;
`;

export const TaskListContainer = styled.div`
  padding: 8px;

  display: flex;
  flex-direction: column;
  ${'' /* flex-direction: row; */}

  min-height: 100px;
  flex-grow: 1;
`;

