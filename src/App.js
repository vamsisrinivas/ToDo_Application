import React, { useState } from 'react'
import './App.css';
import TodoList from './TodoList.js';

const App = () => {
  const [task, setTask] = useState("")
  //For Display List
  const [todos, setTodos] = useState([])
  const changeHandler = e => {
    setTask(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(task)
    //Destructions
    const newTodos = [...todos, task]
    setTodos(newTodos)
    setTask("")
  }
  const deleteHandler = (indexValue) => {
    const newTools = todos.filter((todos, index) => index !== indexValue)
    setTodos(newTools)
  }
  return (
    <div>
      <center>
        <div className="container">
          <div className="inner">
            <h5 className="card-title">Todo Application</h5>
            <form onSubmit={submitHandler}>
              <input className="input-text" placeholder=""type="text" name="task" value={task} onChange={changeHandler} /><br/>
              <input className="input-submit" type="submit" value="Add" name="Add" />
            </form>
            <h5 style={{
              fontSize: "2rem",
              fontWeight: "100",
              marginBottom: "2rem",
              lineHeight: "1em",
              color: "black",
              textTransform: "lowercase",
              textAlign: "center",
            }}><TodoList todolist={todos} deleteHandler={deleteHandler} /></h5>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
