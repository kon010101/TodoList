import React, { useContext } from "react";
import { TodoListContext } from "./TodoListContext";

import "./Sidebar.css";

function Sidebar() {
  const { todoListsContext } = useContext(TodoListContext);
  const [todoLists, setTodoLists] = todoListsContext;

  function renderDoneItems() {
    //get all items which are done
    let allTodos = todoLists.map((list) => list.todos);
    allTodos = [].concat(...allTodos);
    const doneItems = allTodos.filter((el) => el.finished);

    //sort them in order of timestemp
    doneItems.sort(function (a, b) {
      return b.time - a.time;
    });
    //render first 10 elements, remove older ones
    const renderItems = doneItems.map((item, index) => {
      if (index < 10) {
        return (
          <span
            className="todo-finished-item"
            style={{
              backgroundColor: item.listColor,
            }}
          >
            {item.text}
          </span>
        );
      }
    });
    return renderItems;
  }

  function renderPrioItems() {
    let allTodos = todoLists.map((list) => list.todos);
    allTodos = [].concat(...allTodos);
    const prioItems = allTodos.filter((el) => el.prio);
    const renderPrio = prioItems.map((item) => {
      return (
        <span
          className="todo-finished-item"
          style={{
            backgroundColor: item.listColor,
          }}
        >
          {item.text}
        </span>
      );
    });
    return renderPrio;
  }

  function renderListCategories() {
    const projectName = todoLists.map((item) => {
      return (
        <span
          className="todo-finished-item"
          style={{
            backgroundColor: item.color,
          }}
        >
          {item.headline}
        </span>
      );
    });
    return projectName;
  }

  return (
    <div className="sidebar">
      <h1>Important</h1>
      <div className="sidebar-list">{renderPrioItems()}</div>
      <h1>Projects</h1>
      <div className="sidebar-list">{renderListCategories()}</div>
      <h1>Done</h1>
      <div className="sidebar-list">{renderDoneItems()}</div>
    </div>
  );
}

export default Sidebar;
