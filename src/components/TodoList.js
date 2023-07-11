import React, {useState} from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';
import NavbarTitle from './UI/NavbarTitle';
import { Badge } from 'reactstrap';

function TodoList() {
  const [todos, setTodos]=useState([]);

  //Add new Task
  const addTodo = todo =>{
    if(!todo.text || /^\s*$/.test(todo.text)){
      return
    }
    const newTodos=[todo, ...todos]
    setTodos(newTodos)
    console.log(...todos)
  }
  
  //Update Task
  const updateTodo=(todoId, newValue)=>{
    if(!newValue.text || /^\s*$/.test(newValue.text)){
      return
    }
    setTodos(prev=>prev.map(item=>(item.id===todoId?newValue:item)));
  }

  //Remove Task
  const removeTodo=id=>{
    const remove=[...todos].filter(todo=>todo.id!==id)
    setTodos(remove);
  }

  //complete Task
  const completeTodo =id=>{
    let updatedTodos=todos.map(todo=>{
      if(todo.id ===id){
        todo.isComplete=!todo.isComplete;
      }     
      return todo;
    });
    setTodos(updatedTodos);
  }
  console.log(todos)
  return (
    <div>
      <NavbarTitle/>
      <div className='row mx-5'>
        <div className='col-md-6 col-12'>
          <TodoForm onSubmit={addTodo}/>
        </div>
        <div className='col-md-6 col-12'>
          {todos.length !== 0 && (
            <div className='fw-bolder my-5'>LIST</div>
          )}
          <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
      </div>
    </div>
  )
}

export default TodoList
