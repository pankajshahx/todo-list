import { useState } from 'react';
import Task from '../components/Task';
import styles from '../styles/Home.module.scss';


function HomePage(){  
  

  const [task,setTask] = useState([]);
  const [newtask,setNewTask] = useState("");

  function taskAdder(e){
    e.preventDefault();
    if(newtask==""){
      alert("Enter Someting")
    }else{
      const updatedTask = [newtask,...task];
      setTask(updatedTask);
      setNewTask("");
    }   
  }
  return (
    <div className={styles.main}>
      <h1 >MY TO DO LIST</h1>
      <div className={styles.container}>
        
        <form >
          <input type="text" value = {newtask} onChange={(e)=>{setNewTask(e.target.value)}} />
          <button onClick={taskAdder}>Add Task</button>
        </form>
      </div>
      <Task todo = {task} setTask={setTask} />
    </div>
  )
}

export default HomePage;