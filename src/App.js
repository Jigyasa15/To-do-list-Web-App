import React,{useState,useRef} from 'react';
import './App.css';

function App() {
  const [currentTask,setcurrentTask] = useState("");
  const [todolist,settodolist] = useState([]);
  const inputTask = useRef(null);
  const addTask = () =>{
    settodolist([...todolist,{ task: currentTask, completed:false}]);
    inputTask.current.value = "";
    setcurrentTask("");
  }
  const deleteTask = (tasktodelete) =>{
     settodolist(todolist.filter( (task) => {
      return task.task!== tasktodelete;
     }))
  }
  const completedTask = (taskcompleted) =>{
    settodolist(todolist.map((task) =>{
      return task.task == taskcompleted ?
      {task:taskcompleted,completed:true}:
      {task:task.task,completed:task.completed};


    }))
  }
  return (
    <div className="App">
      <h1>To Do List</h1>
      <div>
        <input type="text" ref={inputTask} placeholder='Task' 
        onKeyDown={(event) => {
          if(event.keyCode == 13){
            addTask();
          }
        }}
        onChange={(event) =>{
          setcurrentTask(event.target.value)
        }}></input>
          <button onClick={addTask}>Add Task</button>
      </div>
      <hr />
      <ul>
        {
          todolist.map((val,key) =>{
            return ( 
            <div id="task"><
              li key ={key}>{val.task}</li>
              <button onClick={() => deleteTask(val.task)}>X</button>
              <button onClick={() => completedTask(val.task)}>completed</button>
              {val.completed ? <h1>Task Completed</h1>:
              <h1>Task Not Completed</h1>
            }
              </div>

            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
