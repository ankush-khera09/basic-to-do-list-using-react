import React from "react";
import {AddToDo} from "../MyComponents/AddToDo";
import {ToDos} from "../MyComponents/ToDos"

export const Home = ({addToDo,todos,onDelete})=>{
    return (
        <>
            <AddToDo addToDo={addToDo}/>
            <ToDos todos={todos} onDelete={onDelete} />
        </>
    )
}