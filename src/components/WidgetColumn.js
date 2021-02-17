import React from "react";

import { Droppable } from "react-beautiful-dnd";

import {
  WidgetColumnContainer,
  WidgetListContainer,
} from "../style/components/WidgetColumn.styled";
import Widget from "./Widget";

const WidgetColumn = ({ columns, widgets, widgetsState, setWidgetsState }) => {
  return (
    <WidgetColumnContainer>
      <Droppable droppableId={columns.id} direction="horizontal">
        {(provided) => (
          <WidgetListContainer
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {widgets.map((widget, index) => (
              <Widget
                key={widget.id}
                widget={widget}
                index={index}
                widgetsState={widgetsState}
                setWidgetsState={setWidgetsState}
              />
            ))}
            {provided.placeholder}
          </WidgetListContainer>
        )}
      </Droppable>
    </WidgetColumnContainer>
  );
};

export default WidgetColumn;
