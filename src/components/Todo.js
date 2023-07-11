import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {BiEdit} from 'react-icons/bi'
import {CiCircleRemove} from 'react-icons/ci'

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
  const [edit, setEdit]=useState({
    id:null,
    text:''
  });

  const submitUpdate=value=>{
    updateTodo(edit.id, value);
    setEdit({
        id:null,
        value:''
    });
  }; 

  if(edit.id){
    return<TodoForm edit={edit} onSubmit={submitUpdate}/>;
  }

  return [...todos.filter(todo => !todo.isComplete), ...todos.filter(todo => todo.isComplete)].map((todo, index)=>(
    <div className={todo.isComplete? 'todo-row complete':'todo-row'} key={index}> 
        <div className='row my-4 p-2 border border-1' style={{borderRadius:'8px'}}>
          <div className='col-8'>
            <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
              {todo.text}
            </div>
          </div>
          <div className='col-4'>
            <div className='icons align-right' style={{ float: 'right' }}>

            {!todo.isComplete? (
              <>
                <BiEdit onClick={()=>setEdit({id:todo.id, text:todo.text})} className='text-primary' size={30}/> &nbsp;
                <CiCircleRemove onClick={()=>removeTodo(todo.id)} className='text-danger' size={30}/>
              </>
            ):(
              <>
                <button className='btn btn-success align-right' style={{ float: 'right' }}>Completed</button>
              </>
            )}
                
            </div>
          </div>
        </div>

    </div>
  ));
}

export default Todo
