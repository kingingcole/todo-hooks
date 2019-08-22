import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { generateKeyPair } from "crypto";

// const initialTodos = [
//     {
//         id: 1,
//         content: 'Pay the bills'
//     },
//     {
//         id: 2,
//         content: 'Read books'
//     },
//     {
//         id: 3,
//         content: 'Write a blog post'
//     },
//     {
//         id: 4,
//         content: 'Pay the bills'
//     },
// ];

const App = () => {
  const [todos, setTodos] = useState(null);

  const deleteTodo = todoId => {
    let newTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const addTodo = todo => {
    let newTodo = {
      id: Math.random(),
      content: `${todo[0].toUpperCase() + todo.slice(1, todo.length)}`,
      isChecked: false
    };
    let newTodos = todos ? [...todos, newTodo] : [newTodo];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const clearTodos = () => {
    localStorage.removeItem("todos");
    setTodos(null);
  };

  const completeTodo = todoId => {
    setTodos(todos => {
      let completedTodo = todos.filter(todo => todo.id == todoId)[0];
      completedTodo.isChecked = !completedTodo.isChecked;
      let newTodos = [...todos];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  useEffect(() => {
    document.title = "Noted";
    let todos = localStorage.getItem("todos");
    todos = JSON.parse(todos);
    setTodos(todos);
  }, []);

  return (
    <>
      <Header />
      <Main
        todos={todos}
        deleteTodo={deleteTodo}
        addTodo={addTodo}
        clearTodos={clearTodos}
        completeTodo={completeTodo}
      />
    </>
  );
};

export default App;
