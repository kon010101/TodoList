const colorsDefault = [
  {
    id: "#dea53f",
    isSelected: false,
  },
  {
    id: "#c03c32",
    isSelected: true,
  },
  {
    id: "#c86a34",
    isSelected: false,
  },

  {
    id: "#e6d0a6",
    isSelected: false,
  },
  {
    id: "#2d5c71",
    isSelected: false,
  },
  {
    id: "#62aba7",
    isSelected: false,
  },
];

const todoListsDefault = [
  {
    color: "#dea53f",
    headline: "Home Work",
    key: 1,
    todos: [
      {
        listColor: "#dea53f",
        text: "Wash Dishes",
        finished: false,
        key: 1,
        time: Date.now(),
        prio: false,
      },
      {
        listColor: "#dea53f",
        text: "Walk the dog",
        finished: false,
        key: 2,
        time: Date.now(),
        prio: false,
      },
      {
        listColor: "#dea53f",
        text: "Clean the bathroom :(",
        finished: false,
        key: 3,
        time: Date.now(),
        prio: false,
      },
    ],
  },
  {
    color: "#2d5c71",
    headline: "Coding",
    key: 2,
    todos: [
      {
        listColor: "#2d5c71",
        text: "Learn useReduer!",
        finished: false,
        key: 4,
        time: Date.now(),
        prio: false,
      },
      {
        listColor: "#2d5c71",
        text: "Code 2 hours",
        finished: false,
        key: 5,
        time: Date.now(),
        prio: false,
      },
      {
        listColor: "#2d5c71",
        text: "Love your batch",
        finished: false,
        key: 6,
        time: Date.now(),
        prio: false,
      },
      {
        listColor: "#2d5c71",
        text: "Relax to reenergize",
        finished: false,
        key: 7,
        time: Date.now(),
        prio: false,
      },
    ],
  },
  {
    color: "#c03c32",
    headline: "Christmas",
    key: 3,
    todos: [
      {
        listColor: "#c03c32",
        text: "Get presents",
        finished: false,
        key: 8,
        time: Date.now(),
        prio: false,
      },
      {
        listColor: "#c03c32",
        text: "Bake",
        finished: false,
        key: 9,
        time: Date.now(),
        prio: false,
      },
      {
        listColor: "#c03c32",
        text: "Get christmas tree",
        finished: false,
        key: 10,
        time: Date.now(),
        prio: false,
      },
      {
        listColor: "#c03c32",
        text: "Catch some Pokemon :)",
        finished: false,
        key: 11,
        time: Date.now(),
        prio: false,
      },
    ],
  },
];

export { colorsDefault, todoListsDefault };
