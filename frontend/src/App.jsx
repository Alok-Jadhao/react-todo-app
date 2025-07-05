import { useState, useEffect } from 'react';
import AddTodo from '../components/AddTodo.jsx';
import TodoList from '../components/TodoList.jsx';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  const addTodo = async (text) => {
    const res = await fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ text })
    });
    const newTodo = await res.json();
    if (!res.ok) {
      console.error('Failed to add todo:', newTodo);
      return;
    }
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = async (id) => {
    const todo = todos.find(todo => todo._id === id);
    const res = await fetch(`http://localhost:3000/todos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !todo.completed })
    });
    const updatedTodo = await res.json();
    if (!res.ok) {
      console.error('Failed to update todo:', updatedTodo);
      return;
    }
    setTodos(todos.map(t => t._id === id ? updatedTodo : t));
  };

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE'
    });
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <div className='app-container'>
      <h1>React ToDo App</h1>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo}/>
    </div>
  );
}

export default App;
