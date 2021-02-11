import React, { useState } from "react";

// import NavBar from "./components/Navbar";
// import Main from "./components/Main";
import Column from "./components/Column";

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

    const column = initialState.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newState = {
      ...initialState,
      columns: {
        ...initialState.columns,
        [newColumn.id]: newColumn,
      },
    };

    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {initialState.columnOrder.map((columnId) => {
        const column = initialState.columns[columnId];
        const tasks = column.taskIds.map(
          (taskId) => initialState.tasks[taskId]
        );

        return <Column key={column.id} columns={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
};

export default App;

// <div className="App">
//   <NavBar />
//   <Main />
// </div>
