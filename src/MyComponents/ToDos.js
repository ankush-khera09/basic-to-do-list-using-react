import React from 'react';
import ToDoItem from './ToDoItem'

export const ToDos = (props)=>{
  let myStyle = {
    minHeight:"70vh",
    margin:"40px auto"
  }
  
  return (
    <div className="container my-3" style={myStyle}>
      <h2 className='my-3'>To-Do List:</h2>
      {props.todos.length===0 ? "No Todos to display!" : 
        props.todos.map(
          (todo)=>{
            return (
              <>
              <ToDoItem todo={todo} onDelete={props.onDelete} />
              <hr></hr>
              </>
            )
          }
        )
      }
      
    </div>
  );
}