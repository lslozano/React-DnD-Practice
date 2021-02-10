import React, { useState } from "react";
import Draggable from "react-draggable";

import BoardContainer from "../style/components/Board.styled";;

const DragBox = () => {
  const [position, setPosition] = useState({ x: 0, y: 0});

  const trackPosition = data => {
    setPosition({ x: data.x, y: data.y });
  }

  const onDrag = (e, data) => {
    trackPosition(data);
  }

  return (
    <Draggable onDrag={onDrag}>
      <BoardContainer>
        <div>Here is my position!</div>
        <div>
          x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}
        </div>
      </BoardContainer>
    </Draggable>
  );
};

export default DragBox;
