import React, { useState } from "react";

// import Board from "./Board";
import MainContainer from "../style/components/Main.styled";
import Sidebar from "./Sidebar";
import WidgetsColumns from "../style/components/WidgetsColumns.styled";
import WidgetColumn from "./WidgetColumn";

import { DragDropContext } from "react-beautiful-dnd";

import initialWidgetData from "../initial-data";

const Main = () => {
  const [initialWidgetState, setState] = useState(initialWidgetData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (destination === undefined || destination === null) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceColumn = initialWidgetState.columns[source.droppableId];
    const destinationColumn =
      initialWidgetState.columns[destination.droppableId];

    if (sourceColumn === destinationColumn) {
      const newTaskIds = Array.from(sourceColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...sourceColumn,
        taskIds: newTaskIds,
      };

      const newState = {
        ...initialWidgetState,
        columns: {
          ...initialWidgetState.columns,
          [newColumn.id]: newColumn,
        },
      };

      console.log(newState);
      setState(newState);
      return;
    }

    const startTaskIds = Array.from(sourceColumn.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...sourceColumn,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(destinationColumn.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...destinationColumn,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...initialWidgetState,
      columns: {
        ...initialWidgetState.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setState(newState);
    return;
  };

  return (
    <MainContainer>
      <Sidebar />
      <div className="widgets__container">
        <DragDropContext onDragEnd={onDragEnd}>
          <WidgetsColumns>
            {initialWidgetState.columnOrder.map((columnId) => {
              const column = initialWidgetState.columns[columnId];
              const tasks = column.taskIds.map(
                (taskId) => initialWidgetState.tasks[taskId]
              );

              return <WidgetColumn key={column.id} columns={column} tasks={tasks} />;
            })}
          </WidgetsColumns>
        </DragDropContext>
      </div>
    </MainContainer>
  );
};

export default Main;
