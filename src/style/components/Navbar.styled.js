import styled from 'styled-components'

const NavbarContainer = styled.div`
  background-color: #161d6f;
  height: 50px;

  .navbar {
    display: flex;
    flex-direction: row;
    color: #fff;
    margin-left: 50px;
    justify-content: space-between;

    .navbar__options {
      display: flex;
      flex-direction: row;
      list-style: none;
      color: #fff;
      width: 350px;
      justify-content: space-between;
      margin-right: 50px;
      align-items: center;
    }
  }
`;

export default NavbarContainer;