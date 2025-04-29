import React from 'react';

function Todo({ todo, deleteTodo, toggleComplete }) {
  return (
    <div className='todo'>
      <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </p>
      <div className='actions'>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
