import React from 'react';

// props likhne se props.something krke use krte hai
// aise {propData1, propData2} krne se props ki jo chize chahiye vo lelo and direct name se use krlo
// this is called "Destructuring"

export default function ToDo({todo, onDelete}) {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
      {/* 
        onClick={onDelete(todo)} => ye fn rendering ke itme pe apne aap call hojega
        onClick={()=>{onDelete(todo)}} => jab arrow method call hoga toh ye onDelete function call hoga
        // as here we just passed an arrow fn and not called it
      */}
    </div>
  );
}
