import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faTrashCan,faPenClip,faMoon,faSun 
} from '@fortawesome/free-solid-svg-icons'

const ToDo = ({toDo,markTask,setUpdateData,DeleteTask}) =>{

    return(

        <div className='taskList overflow-auto'>

       

    {toDo && toDo.map((task,index) => {
      return(
        <React.Fragment>
          <div>
            <ul>
              <div className=  {` ${task.status ? 'done': ''} `}>
                <li> <div className='taskText'>{task.title}</div>
              <span className='icons'><FontAwesomeIcon icon={faCircleCheck} className = 'check i' title='Complete/Uncomplete' onClick={() => markTask(task.id) }/>
              <FontAwesomeIcon icon={faPenClip} className = 'pen i' title='Edit' onClick={() => setUpdateData({ id :task.id, title: task.title, status:task.status ? true: false}) } />
              <FontAwesomeIcon icon={faTrashCan} className = 'TrashCan i' title='Delete' onClick={() => DeleteTask(task.id) }/>
              </span>
              </li>
              
              </div> 
    
          </ul>
          </div>
 
          
        </React.Fragment>
      )
    })}
    </div>
    )

}

export default ToDo