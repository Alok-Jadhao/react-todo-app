import React from 'react'

export default function TodoItem({todo, onToggle, onDelete}) {
  return (
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            style={{ marginRight: '10px' }}
        />
        <span
            style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer'
            }}
            
            >
                {todo.text}
            </span>
            <button onClick={() => onDelete(todo.id)} style={{marginLeft: '10px' }}>
                Delete
            </button>
    </li>
  )
}
