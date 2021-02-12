import React from "react";

import { Droppable } from "react-beautiful-dnd";

import {
  WidgetColumnContainer,
  WidgetTitleContainer,
  WidgetListContainer,
} from "../style/components/WidgetColumn.styled";
import Task from "./Task";

const WidgetColumn = ({ columns, tasks }) => {
  return (
    <WidgetColumnContainer>
      <WidgetTitleContainer>{columns.title}</WidgetTitleContainer>
      <Droppable droppableId={columns.id} direction="horizontal">
        {(provided) => (
          <WidgetListContainer
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </WidgetListContainer>
        )}
      </Droppable>
    </WidgetColumnContainer>
  );
};

export default WidgetColumn;
