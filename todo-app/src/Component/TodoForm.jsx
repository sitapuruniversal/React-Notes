import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      addTodo({
        id: Math.floor(Math.random() * 1000),
        title,
        completed: false,
      });
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}
          className='flex flex-row justify-center items-center border-2 rounded-md p-3 text-green-600 font-bold text-2xl mb-5'>
      <input
        className='outline-none capitalize'      
        type="text"
        placeholder="Add Item......"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
          className='outline-none pointer'
          type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
