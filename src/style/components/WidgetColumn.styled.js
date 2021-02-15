import styled from "styled-components";

export const WidgetColumnContainer = styled.div`
  width: 90%;

  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  background-color: white;

  display: flex;
  flex-direction: column;
  max-height: 700px;
`;

export const WidgetTitleContainer = styled.h3`
  padding: 8px;
`;

export const WidgetListContainer = styled.div`
  padding: 8px;

  display: flex;
  flex-direction: row;
  ${'' /* flex-direction: row; */}

  min-height: 100px;
  max-height: 100%;
  ${'' /* flex-grow: 1; */}
`;

