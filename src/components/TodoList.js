import React, {useState} from 'react'
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos]=useState([]);

  const addTodo =todo =>{
    if(!todo.text || /^\s*s/.test(todo.text))
  }
  return (
    <div>
      <h1>Hi Ifla! What's the plan for today?</h1>
      <TodoForm/>
    </div>
  )
}

export default TodoList
