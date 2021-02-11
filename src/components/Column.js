import React from "react";

import { Droppable } from "react-beautiful-dnd";

import {
  ColumnContainer,
  TitleContainer,
  TaskListContainer,
} from "../style/components/Column.styled";
import Task from "./Task";

const Column = ({ columns, tasks }) => {
  return (
    <ColumnContainer>
      <TitleContainer>{columns.title}</TitleContainer>
      <Droppable droppableId={columns.id} direction="horizontal">
        {(provided) => (
          <TaskListContainer
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </TaskListContainer>
        )}
      </Droppable>
    </ColumnContainer>
  );
};

export default Column;
