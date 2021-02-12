import React, { useState } from "react";

// import Board from "./Board";
import MainContainer from "../style/components/Main.styled";
import Sidebar from "./Sidebar";
import WidgetsColumns from "../style/components/WidgetsColumns.styled";
import WidgetColumn from "./WidgetColumn";

import { DragDropContext } from "react-beautiful-dnd";

import initialWidgetData from "../initialWidgetData";

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
      const newWidgetIds = Array.from(sourceColumn.widgetIds);
      newWidgetIds.splice(source.index, 1);
      newWidgetIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...sourceColumn,
        widgetIds: newWidgetIds,
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

    const startWidgetIds = Array.from(sourceColumn.widgetIds);
    startWidgetIds.splice(source.index, 1);
    const newStart = {
      ...sourceColumn,
      widgetIds: startWidgetIds,
    };

    const finishWidgetIds = Array.from(destinationColumn.widgetIds);
    finishWidgetIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...destinationColumn,
      widgetIds: finishWidgetIds,
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
        <DragDropContext onDragEnd={onDragEnd} direction="horizontal">
          <WidgetsColumns>
            {initialWidgetState.columnOrder.map((columnId) => {
              const column = initialWidgetState.columns[columnId];
              const widgets = column.widgetIds.map(
                (widgetId) => initialWidgetState.widgets[widgetId]
              );

              return <WidgetColumn key={column.id} columns={column} widgets={widgets} />;
            })}
          </WidgetsColumns>
        </DragDropContext>
      </div>
    </MainContainer>
  );
};

export default Main;
