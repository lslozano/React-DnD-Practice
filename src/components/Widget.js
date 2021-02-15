import React from "react";

import { Draggable } from "react-beautiful-dnd";

import WidgetContainer from "../style/components/Widget.styled";

const Widget = ({ widget, index }) => {
  return (
    <Draggable draggableId={widget.id} index={index}>
      {(provided) => (
        <WidgetContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <h3 className="widget__title">{widget.title}</h3>
          <div className="widget__content">
            <img
              className="widget__graphic"
              src={widget.img}
              alt="infographic"
            />
            <ul className="widget__list">
              <li>Alcance total</li>
              <li>Alcance real</li>
            </ul>
          </div>
        </WidgetContainer>
      )}
    </Draggable>
  );
};

export default Widget;
