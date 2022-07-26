
const AddTaskForm = ({newTask,setNewTask,addTask,darkMode,light,dark}) =>{

    return(
     
        <div className='input-group '> 
        <input type="text" className= "form-control inputTask mt-5 " value={newTask} onChange ={(e) => setNewTask(e.target.value)}/>
        <button class="btn btn-success addTextButton mt-5" type="button" onClick={addTask} >Add Task</button>
        </div>
        
    
        
    )
}

export default AddTaskForm;