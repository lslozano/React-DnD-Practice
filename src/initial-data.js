const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favorite show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Widgets 1",
      taskIds: ["task-1", "task-2", "task-3"],
    },
    "column-2": {
      id: "column-2",
      title: "Widgets 2",
      taskIds: [],
    },
    // "column-3": {
    //   id: "column-3",
    //   title: "Widgets 3",
    //   taskIds: [],
    // },
  },
  columnOrder: ["column-1", "column-2"],
};

export default initialData;
