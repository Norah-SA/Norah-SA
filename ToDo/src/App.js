import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddTaskForm from './components/AddTaskForm'
import UpdateTaskForm from './components/UpdateTaskForm'
import ToDo from './components/ToDo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faTrashCan,faPenClip,faMoon,faSun 
} from '@fortawesome/free-solid-svg-icons'
import './App.css'

function App() {

  const [darkMode, setDarkMode] = useState(false)
  const[toDo, setToDo] = useState([
    {"id": 1, "title":"Task 1", "status": false},
    {"id": 2, "title":"Task 2", "status": false}
  ])

  //Add new task
  const[newTask, setNewTask] = useState('')
  
  //update task
  const [updateData, setUpdateData] = useState('')

  //Add new task function
  const addTask = () =>{
    
    if(newTask){
      let n = toDo.length + 1
      let newEntry = {id:n, title: newTask, status: false}
      setToDo([...toDo,newEntry])
      setNewTask('')
    }
  }

  //Delete task function 
  const DeleteTask = (id) =>{
    let newTasks = toDo.filter(task => task.id !== id)
    setToDo(newTasks)
  }

  //complete and uncomplete function

  const markTask = (id) =>{
    let newTask = toDo.map(task => {
      if(task.id === id){
        return({...task, status: !task.status})
      }
      return task
    })
    setToDo(newTask)
  }

  //cancle update
  const cancle =() =>{
    setUpdateData('')
  }
  // update
  const updateTask = () =>{
    let update = [...toDo].filter(task => task.id !== updateData.id)
    let updateObj = [...update, updateData]
    setToDo(updateObj)
    setUpdateData('')
  }

  const changeTask = (e) =>{
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true: false
    }
    setUpdateData(newEntry)
  }
  
  const switchTheme = () =>{
    const newTheme = darkMode === "light" ? "dark" : "light"
    setDarkMode(newTheme)
  }

  const dark = () => {
    document.querySelector('body').style.backgroundColor = "#141414"
    setDarkMode(true)
  }
  const light = () =>{
    document.querySelector('body').style.backgroundColor = "#F5F7FB"
    setDarkMode(false)
  }


  return(
    
    <html >
      <div className='app container ' data-theme = {darkMode}>

      
      <div className= "mode"> 
       
       <p onClick={switchTheme}>{darkMode === 'light'? <FontAwesomeIcon icon={faMoon} title = 'Dark' onClick={dark}/>:<FontAwesomeIcon icon={faSun} title = 'Light' onClick={light}/>}</p>
        
       
      </div>
      {updateData && updateData.title ? (
        <UpdateTaskForm 
        updateData= {updateData}
        changeTask = {changeTask}
        updateTask = {updateTask}
        cancle = {cancle}
        />
      ):(
        <AddTaskForm
         newTask = {newTask}
         setNewTask = {setNewTask}
         addTask = {addTask}
         
         />
      )}
      

      
      <hr />
      <h2>Tasks</h2>
    {toDo && toDo.length? '': ( <p>No Tasks...</p> )}  
      <ToDo 
      toDo = {toDo}
      markTask= {markTask} 
      setUpdateData = {setUpdateData}
      DeleteTask = {DeleteTask}
      

      />
    </div>
  </html>
  )
  
}

export default App