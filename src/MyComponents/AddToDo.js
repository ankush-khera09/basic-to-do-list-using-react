import React, {useState} from "react";

export const AddToDo = ({addToDo})=>{
    
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();       // page reload ni hoga bcz of 'submit' button
        if(!title || !desc){
            alert("Title or Description can't be left empty!!")
        }else{
            addToDo(title, desc);         // coming as props from APP.js
            // input form se value gayab ni ho rhi after filling once (placeholder ban jaa rha h)
            // so make them blank
            setTitle("");
            setDesc("");
        }
    }
    
    return (
        <div className="container my-3">
            <h3 className="text-center">Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">To-Do Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} 
                    className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">To-Do Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-success btn-sm">Add To-Do</button>
            </form>
        </div>
    )
}