import React from 'react';
import Todo from './Todo';

function Todocontainer({ todos, deleteTodo, toggleComplete }) {
  return (
    <div className="todo-container">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}

export default Todocontainer;
