import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, markComplete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          markComplete={markComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;
