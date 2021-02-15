import React from "react";

import SidebarContainer from "../style/components/Sidebar.styled";

const Sidebar = ({ widgetsData, setWidgetsState }) => {
  let size = Object.keys(widgetsData.widgets).length;

  const addWidget = () => {

    const newWidget = {
      ...widgetsData,
      widgets: {
        ...widgetsData.widgets,
        [`widget-${size + 1}`]: {
          id: `widget-${size + 1}`,
          title: `Widget-${size + 1}`,
          content: "Random content",
          img: "/infographicimg.png",
        },
      },
      // columns: {
      //   ...widgetsData.columns,
      //   "column-1": {
      //     widgetIds: ["widget-1", "widget-2", "widget-3"],
      //   },
      // },
      // columnOrder: ["column-1"],
    };

    setWidgetsState(newWidget);

    console.log(size);
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
