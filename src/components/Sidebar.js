import React from "react";

import SidebarContainer from "../style/components/Sidebar.styled";

const Sidebar = ({ widgetsData, setWidgetsState }) => {
  const addWidget = () => {
    let widgetsCount = Object.keys(widgetsData.widgets).length;
    const widgetIdsArray = widgetsData.columns["column-1"].widgetIds;

    if (widgetsCount === 0 || widgetsCount < 3) {
      const newWidget = {
        ...widgetsData,
        widgets: {
          ...widgetsData.widgets,
          [`widget-${widgetsCount + 1}`]: {
            id: `widget-${widgetsCount + 1}`,
            title: `Widget-${widgetsCount + 1}`,
            content: "Random content",
            img: "/infographicimg.png",
          },
        },
        columns: {
          ...widgetsData.columns,
          "column-1": {
            id: "column-1",
            title: "Widgets 1",
            widgetIds: [...widgetIdsArray, `widget-${widgetsCount + 1}`],
          },
        },
        columnOrder: ["column-1"],
      };

      setWidgetsState(newWidget);
    } else if (widgetsCount === 3) {
      const newWidget = {
        ...widgetsData,
        widgets: {
          ...widgetsData.widgets,
          [`widget-${widgetsCount + 1}`]: {
            id: `widget-${widgetsCount + 1}`,
            title: `Widget-${widgetsCount + 1}`,
            content: "Random content",
            img: "/infographicimg.png",
          },
        },
        columns: {
          ...widgetsData.columns,
          "column-2": {
            id: "column-2",
            title: "Widgets 2",
            widgetIds: [`widget-${widgetsCount + 1}`],
          },
        },
        columnOrder: ["column-1", "column-2"],
      };

      setWidgetsState(newWidget);
    }

    // else if (widgetsCount > 2 && widgetsCount < 4) {
    //   const widgetIdsArray = widgetsData.columns["column-2"].widgetIds;

    //   const newWidget = {
    //     ...widgetsData,
    //     widgets: {
    //       ...widgetsData.widgets,
    //       [`widget-${widgetsCount + 1}`]: {
    //         id: `widget-${widgetsCount + 1}`,
    //         title: `Widget-${widgetsCount + 1}`,
    //         content: "Random content",
    //         img: "/infographicimg.png",
    //       },
    //     },
    //     columns: {
    //       ...widgetsData.columns,
    //       "column-2": {
    //         id: "column-2",
    //         title: "Widgets 2",
    //         widgetIds: [...widgetIdsArray, `widget-${widgetsCount + 1}`],
    //       },
    //     },
    //     columnOrder: ["column-1", "column-2"],
    //   };
    //   setWidgetsState(newWidget);
    // }

    // console.log(size);
    console.log(widgetsData.widgets);
    console.log(widgetsData.columns["column-1"].widgetIds);
    console.log(widgetsData.columnOrder);
  };

  return (
    <SidebarContainer>
      <ul className="sidebar">
        <li className="sidebar__option">
          <button onClick={addWidget}>Add widget</button>
        </li>
        <li className="sidebar__option">Sidebar Link</li>
        <li className="sidebar__option">Sidebar Link</li>
        <li className="sidebar__option">Sidebar Link</li>
        <li className="sidebar__option">Sidebar Link</li>
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;
