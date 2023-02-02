import './App.css';
import React, {useState, useEffect} from 'react';   // useState/useEffect: React Hooks
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { ToDos } from './MyComponents/ToDos';
import { AddToDo } from './MyComponents/AddToDo';
import { About } from './MyComponents/About';
import { Home } from './pages/home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  let initToDo;

  // agr null hai
  if(localStorage.getItem("todos")===null){
    initToDo = [];
  }else{
    initToDo = JSON.parse(localStorage.getItem("todos"));
  }
  
  const onDelete = (todo)=>{
    // Deleting this way doesn't work in React
    /* 
      let index = todos.indexOf(todo);
      todos.splice(index, 1);
    */

    // vo todos show kro jo given deleted todo na ho
    setTodos(todos.filter((e)=>{
        return e!==todo;
    }));
    
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addToDo = (title, desc)=>{
    
    // if it is first todo to be added
    let sno;
    if(todos.length===0){
      sno = 0;
    }else{
      let sno = todos[todos.length-1].sno + 1;      // todos me last todo ka sno+1
    }

    const myToDo = {
      sno: sno,
      title: title,
      desc: desc
    }

    setTodos([...todos, myToDo]);        // todos me new todo: "myToDo" add krdo

  }
  
  const [todos, setTodos] = useState(initToDo);    // initially todos is an empty array
  
  // useState se koi bhi change immediately show ni hota
  // isilye useEffect use krte hai => jaise hi todos change ho toh arrow method ko call krdo
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
  return (
    <>
      <Router>

        {/* Header hmesha show hoye */}
        <Header title="My ToDo List" searchBar={false} />

        <Routes>

          <Route exact path="/" element={<Home addToDo={addToDo} todos={todos} onDelete={onDelete}/>}>
             
          </Route>
          
          <Route exact path="/about" element={<About />}></Route>

        </Routes>
        
        <Footer />
      </Router>
    </>
  );
}

export default App;
