import "./TodoList.css";
import React, { useState, useContext } from "react";
import { RiCloseLine } from "react-icons/ri";
import { TodoListContext } from "./TodoListContext";

//import components
import ToDoItem from "./TodoItem";
import AddToDoLine from "./AddTodoLine";

function TodoList({ todoList }) {
  //states
  const [changeHeadline, setChangeHeadline] = useState(false);
  const [inputText, setInputText] = useState("");
  //context
  const { todoListsContext } = useContext(TodoListContext);
  const [todoLists, setTodoLists] = todoListsContext;

  const getTodos = () => {
    //sort todos and put Important ones on top
    todoList.todos.sort(function (a, b) {
      return b.prio - a.prio;
    });
    const toDoItems = todoList.todos.map((todo, index) => {
      return (
        <ToDoItem
          todoClassName={todo.finished ? "todo-item-finished" : "todo-item"}
          todo={todo}
          todoList={todoList}
        />
      );
    });
    return toDoItems;
  };

  function handleRemove() {
    //search for current key in item and remove it from todos
    setTodoLists(todoLists.filter((el) => el.key !== todoList.key));
  }

  function handleDoubleClick() {
    setChangeHeadline(true);
    setInputText(todoList.headline);
  }

  const handleInputText = ({ keyCode, target }) => {
    setInputText(target.value); //just add if not empty or whitespace
    if (keyCode === 13) {
      if (inputText.trim()) todoList.headline = inputText;
      setChangeHeadline(false);
    }
  };

  return (
    <div
      className="todo-list-container"
      style={{ backgroundColor: todoList.color }}
    >
      <div className="close" onClick={handleRemove}>
        <RiCloseLine />
      </div>
      {!changeHeadline ? (
        <h1 className="headline" onDoubleClick={handleDoubleClick}>
          {todoList.headline}
        </h1>
      ) : (
        <input
          className="input-headline"
          autoFocus
          value={inputText}
          onKeyDown={handleInputText}
          onChange={handleInputText}
        ></input>
      )}
      <div className="todo-list">{getTodos()}</div>
      <AddToDoLine className="add-todo-line" todoList={todoList} />
    </div>
  );
}

export default TodoList;
