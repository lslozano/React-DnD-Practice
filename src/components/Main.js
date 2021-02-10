import React from "react";

import MainContainer from "../style/components/Main.styled";
import Sidebar from "./Sidebar";
import Board from "./Board";

const Main = () => {
  return (
    <MainContainer>
      <Sidebar />
      <div className="boards__wrapper">
        <Board />
      </div>
    </MainContainer>
  )
};

export default Main;
