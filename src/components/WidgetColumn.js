import React from "react";

import { Droppable } from "react-beautiful-dnd";

import {
  WidgetColumnContainer,
  WidgetTitleContainer,
  WidgetListContainer,
} from "../style/components/WidgetColumn.styled";
import Task from "./Task";

const WidgetColumn = ({ columns, widgets }) => {
  return (
    <WidgetColumnContainer>
      <WidgetTitleContainer>{columns.title}</WidgetTitleContainer>
      <Droppable droppableId={columns.id} direction="horizontal">
        {(provided) => (
          <WidgetListContainer
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {widgets.map((widget, index) => (
              <Task key={widget.id} task={widget} index={index} />
            ))}
            {provided.placeholder}
          </WidgetListContainer>
        )}
      </Droppable>
    </WidgetColumnContainer>
  );
};

export default WidgetColumn;
