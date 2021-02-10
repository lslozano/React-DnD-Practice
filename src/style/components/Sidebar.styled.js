import styled from "styled-components";

const SidebarContainer = styled.div`
  background-color: #276678;
  height: 94vh;
  width: 20%;
  color: white;
  display: inline-block;

  .sidebar {
    height: 100%;
    display: flex;
    flex-direction: column;
    list-style: none;
    justify-content: space-between;
    padding: 30px 0 15px 15px;
  }
`;

export default SidebarContainer;