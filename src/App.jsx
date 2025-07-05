import { useState } from 'react';
import AddTodo from '../components/AddTodo.jsx';
import TodoList from '../components/TodoList.jsx';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState(() => {
	const stored = localStorage.getItem('todos');
	return stored ? JSON.parse(stored) : [];
  });

  // saving todos to localStorage
  useEffect(() => {
	localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  const addTodo = (text) => {
	setTodos([...todos, { text, completed: false, id: Date.now()}]);
  }

  const toggleTodo = (id) => {
	setTodos(
		todos.map(todo =>
			todo.id === id ? {...todo, completed: !todo.completed} : todo
		)
	)
  };

  const deleteTodo = (id) => {
	setTodos(
		todos.filter(todo => todo.id !== id)
	)
  }

  return (
    <>
      <div className='app-container'>
		<h1>React ToDo App</h1>
	    <AddTodo onAdd={addTodo} />
	    <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo}/>
	  
	  </div>
    </>
  )
}

export default App
