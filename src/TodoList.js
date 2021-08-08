import React from 'react'
import './App.css'
const TodoList = ({ todolist,deleteHandler }) => {
    return (
        <div>
        
            {todolist.map((todo, index)=>
            <div key={index}>
                <h6 >{todo} <button className="button" onClick={()=>deleteHandler(index)}>Delete</button></h6>
            </div>)
            }
        </div>
    )
}

export default TodoList
