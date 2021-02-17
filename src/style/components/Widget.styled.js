import styled from "styled-components";

const WidgetContainer = styled.div`
  background-color: #fff;
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px 0 8px 8px;
  margin-right: 15px;
  width: 350px;
  height: 350px;

  display: flex;
  flex-direction: column;

  .widget__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .widget__title {
      margin: 20px 0 40px 0;
    }

    .widget__delete {
      height: 30px;
      padding: 0 15px;
      margin: 20px 10px 0 0;
      background-color: #ec4646;
      border: none;
      border-radius: 4px;
      color: #fff;
    }
  }

  .widget__content {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    .widget__graphic {
      width: 250px;
    }
    .widget__list {
      list-style: none;
    }
  }
`;

export default WidgetContainer;
