import React from "react";

import { Draggable } from "react-beautiful-dnd";

import TaskContainer from "../style/components/Task.styled";

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <TaskContainer 
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {task.content}
        </TaskContainer>
      )}
    </Draggable>
  );
};

export default Task;
