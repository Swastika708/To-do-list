import { useState } from 'react';
import React from 'react';
import './App.css';
import Todocontainer from './components/Todocontainer';
import Inputcontainer from './components/Inputcontainer';

function App() {
  const [inputVal, setInputVal] = useState('');
  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    if (inputVal !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputVal,
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputVal('');
    }
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  }

  function toggleComplete(id) {
    setTodos((prevTodos) =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <main>
      <h1>To do list</h1>
      <Inputcontainer inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo} />
      <Todocontainer todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
    </main>
  );
}

export default App;
