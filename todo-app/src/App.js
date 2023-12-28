import React, { useState, useEffect } from "react";
import TodoList from "./Component/TodoList";
import TodoForm from "./Component/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const markComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <div className="flex justify-between items-center h-screen bg-gray-500">
        <div className="flex flex-col justify-between items-center  bg-white p-10 h-auto rounded mx-auto">
          <h1 className=" text-4xl uppercase text-green-600 font-bold pb-4">
            Todo List
          </h1>
          <TodoForm addTodo={addTodo} />
          <TodoList
            className="mt-5 p-3"
            todos={todos}
            deleteTodo={deleteTodo}
            markComplete={markComplete}
          />
        </div>
      </div>
    </>
  );
};

export default App;
