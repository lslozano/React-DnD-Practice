import React from "react";

import NavbarContainer from "../style/components/Navbar.styled";

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="navbar">
        <h1 className="navbar__header">React DnD Practice</h1>
        <ul className="navbar__options">
          <li className="navbar__option">Nav Link</li>
          <li className="navbar__option">Nav Link</li>
          <li className="navbar__option">Nav Link</li>
          <li className="navbar__option">Nav Link</li>
        </ul>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
