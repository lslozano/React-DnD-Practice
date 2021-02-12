const initialWidgetData = {
  widgets: {
    "widget-1": { id: "widget-1", content: "Take out the garbage" },
    "widget-2": { id: "widget-2", content: "Watch my favorite show" },
    "widget-3": { id: "widget-3", content: "Charge my phone" }
    // "task-4": { id: "task-4", content: "Workout" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Widgets 1",
      widgetIds: ["widget-1", "widget-2", "widget-3"],
    },
    "column-2": {
      id: "column-2",
      title: "Widgets 2",
      widgetIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Widgets 3",
      widgetIds: [],
    },
    "column-4": {
      id: "column-4",
      title: "Widgets 4",
      widgetIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3", "column-4"],
};

export default initialWidgetData;
