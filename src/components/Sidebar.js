import React from "react";
// import initialWidgetData from "../initialWidgetsData";

import SidebarContainer from "../style/components/Sidebar.styled";

const Sidebar = ({
  widgetsData,
  setWidgetsState,
  widgetCounter,
  setWidgetCounter,
  widgetId,
  setWidgetId,
  columnId,
  setColumnId,
}) => {
  const addWidget = () => {

    if (widgetCounter === 0) {
      setWidgetCounter((prevWidgetCounter) => prevWidgetCounter + 1);

      const newWidget = {
        ...widgetsData,
        widgets: {
          ...widgetsData.widgets,
          [`widget-${widgetId}`]: {
            id: `widget-${widgetId}`,
            title: `Widget-${widgetId}`,
            content: "Random content",
            img: "/infographicimg.png",
          },
        },
        columns: {
          ...widgetsData.columns,
          [`column-${columnId}`]: {
            id: `column-${columnId}`,
            title: `Widgets ${widgetId}`,
            widgetIds: [`widget-${widgetId}`],
          },
        },
        columnOrder: [`column-${columnId}`],
      };

      setWidgetsState(newWidget);
      setWidgetId((prevWidgetId) => prevWidgetId + 1);
    } else if (widgetCounter >= 1 && widgetCounter % 2 !== 0) {
      setWidgetCounter((prevWidgetCounter) => prevWidgetCounter + 1);

      const widgetIdsArray = widgetsData.columns[`column-${columnId}`].widgetIds;
      const columnIdsArray = widgetsData.columnOrder;

      const newWidget = {
        ...widgetsData,
        widgets: {
          ...widgetsData.widgets,
          [`widget-${widgetId}`]: {
            id: `widget-${widgetId}`,
            title: `Widget-${widgetId}`,
            content: "Random content",
            img: "/infographicimg.png",
          },
        },
        columns: {
          ...widgetsData.columns,
          [`column-${columnId}`]: {
            id: `column-${columnId}`,
            title: `Widgets ${widgetId}`,
            widgetIds: [...widgetIdsArray, `widget-${widgetId}`],
          },
        },
        columnOrder: [...columnIdsArray],
      };

      setWidgetsState(newWidget);
      setWidgetId((prevWidgetId) => prevWidgetId + 1);
      setColumnId((prevColumnId) => prevColumnId + 1);
    } else if (widgetCounter >= 1 && widgetCounter % 2 === 0) {
      setWidgetCounter((prevWidgetCounter) => prevWidgetCounter + 1);

      const columnIdsArray = widgetsData.columnOrder;

      const newWidget = {
        ...widgetsData,
        widgets: {
          ...widgetsData.widgets,
          [`widget-${widgetId}`]: {
            id: `widget-${widgetId}`,
            title: `Widget-${widgetId}`,
            content: "Random content",
            img: "/infographicimg.png",
          },
        },
        columns: {
          ...widgetsData.columns,
          [`column-${columnId}`]: {
            id: `column-${columnId}`,
            title: `Widgets ${widgetId}`,
            widgetIds: [`widget-${widgetId}`],
          },
        },
        columnOrder: [...columnIdsArray, `column-${columnId}`],
      };

      setWidgetsState(newWidget);
      setWidgetId((prevWidgetId) => prevWidgetId + 1);
    }
  };

  const deleteAllWidgets = () => {
    setWidgetsState({});
    setWidgetCounter(0);
    setWidgetId(1);
    setColumnId(1);
  };

  return (
    <SidebarContainer>
      <ul className="sidebar">
        <li className="sidebar__option">
          <button onClick={addWidget}>Add widget</button>
        </li>
        <li className="sidebar__option">
          <button onClick={deleteAllWidgets}>Delete all Widgets</button>
        </li>
        <li className="sidebar__option">Sidebar Link</li>
        <li className="sidebar__option">Sidebar Link</li>
        <li className="sidebar__option">Sidebar Link</li>
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;
