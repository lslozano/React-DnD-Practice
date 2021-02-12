import React, { useState } from "react";

// import NavBar from "./components/Navbar";
// import Main from "./components/Main";
import Column from "./components/Column";
import Columns from "./style/components/Columns.styled";

import { DragDropContext } from "react-beautiful-dnd";

import initialData from "./initial-data";

const App = () => {
  const [initialState, setState] = useState(initialData);

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

    const sourceColumn = initialState.columns[source.droppableId];
    const destinationColumn = initialState.columns[destination.droppableId];

    if (sourceColumn === destinationColumn) {
      const newTaskIds = Array.from(sourceColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...sourceColumn,
        taskIds: newTaskIds,
      };

      const newState = {
        ...initialState,
        columns: {
          ...initialState.columns,
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
      ...initialState,
      columns: {
        ...initialState.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    console.log(newState);
    setState(newState);
    return;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Columns>
        {initialState.columnOrder.map((columnId) => {
          const column = initialState.columns[columnId];
          const tasks = column.taskIds.map(
            (taskId) => initialState.tasks[taskId]
          );

          return <Column key={column.id} columns={column} tasks={tasks} />;
        })}
      </Columns>
    </DragDropContext>
  );
};

export default App;

// <div className="App">
//   <NavBar />
//   <Main />
// </div>
