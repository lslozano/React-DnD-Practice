import React, { useState } from "react";

// import Board from "./Board";
import MainContainer from "../style/components/Main.styled";
import Sidebar from "./Sidebar";
import WidgetsColumns from "../style/components/WidgetsColumns.styled";
import WidgetColumn from "./WidgetColumn";

import { DragDropContext } from "react-beautiful-dnd";

import initialWidgetsData from "../initialWidgetsData";

const Main = () => {
  const [initialWidgetsState, setWidgetsState] = useState(initialWidgetsData);

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

    const sourceColumn = initialWidgetsState.columns[source.droppableId];
    const destinationColumn =
      initialWidgetsState.columns[destination.droppableId];

    if (sourceColumn === destinationColumn) {
      const newWidgetIds = Array.from(sourceColumn.widgetIds);
      newWidgetIds.splice(source.index, 1);
      newWidgetIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...sourceColumn,
        widgetIds: newWidgetIds,
      };

      const newState = {
        ...initialWidgetsState,
        columns: {
          ...initialWidgetsState.columns,
          [newColumn.id]: newColumn,
        },
      };

      console.log(newState);
      setWidgetsState(newState);
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
      ...initialWidgetsState,
      columns: {
        ...initialWidgetsState.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setWidgetsState(newState);
    return;
  };

  return (
    <MainContainer>
      <Sidebar widgetsData={initialWidgetsState} setWidgetsState={setWidgetsState} />
      <div className="widgets__container">
        <DragDropContext onDragEnd={onDragEnd} direction="horizontal">
          <WidgetsColumns>
            {initialWidgetsState.columnOrder.map((columnId) => {
              const column = initialWidgetsState.columns[columnId];
              const widgets = column.widgetIds.map(
                (widgetId) => initialWidgetsState.widgets[widgetId]
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
