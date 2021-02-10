import React from "react";

import SidebarContainer from "../style/components/Sidebar.styled";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <ul className="sidebar">
        <li className="sidebar__option">Sidebar Link</li>
        <li className="sidebar__option">Sidebar Link</li>
        <li className="sidebar__option">Sidebar Link</li>
        <li className="sidebar__option">Sidebar Link</li>
        <li className="sidebar__option">Sidebar Link</li>
      </ul>
    </SidebarContainer>
  )
};

export default Sidebar;
