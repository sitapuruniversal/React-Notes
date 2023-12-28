import React from "react";

const TodoItem = ({ todo, deleteTodo, markComplete }) => {
  const { id, title, completed } = todo;

  return (
    <div
      className={`flex  gap-5 items-center justify-around ${
        completed ? "line-through text-red-600 text-4xl" : " "
      }`}
    >
      <p className="p-5 bg-slate-500 text-white font-bold text-2xl rounded-md ">
        {title}
      </p>
      <div className="p-5  flex gap-5 justify-around flex-wrap">
        <div className="flex rounded-md gap-4 bg-slate-500 p-5 text-white font-bold text-xl">
          <button onClick={() => markComplete(id)}>
            Marked {completed ? "Incomplete" : "Complete"}
          </button>
          <button onClick={() => deleteTodo(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
