/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoForm = () => {
  const [todo, setTodo] = useState([
    { name: "task1", priority: "1" },
    { name: "task2", priority: "2" },
  ]);

  const handleDelete = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  const handleComplete = (index) => {
    const newTodo = [...todo];
   newTodo[index].name=<strike>
    { newTodo[index].name}
   </strike>
   newTodo[index].priority=<strike>
   { newTodo[index].priority}  </strike>
    setTodo(newTodo);
    
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "3px dashed black",
        minHeight: 200,
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          border: "3px sol red",
          textShadow: "blue",
        }}
      >
        Todo App
      </h1>

      <form>
        <input
          type="text"

          name="nm"
          defaultValue="name : "
          style={{
            display: "block",
            backgroundColor: "#2525",
            color: "white",
            padding:"10px 15px"
          }}
        ></input>
      </form>

      {todo.map((Element, index) => (
        <TodoItem
          name={Element.name}
          name2={Element.priority}
          key={index}
          handleDelete={() => handleDelete(index)}
          handleComplete={() => handleComplete(index)}
        />
      ))}
    </div>
  );
};

export default TodoForm;