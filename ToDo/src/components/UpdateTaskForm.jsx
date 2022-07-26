const UpdateTaskForm = ({updateData,changeTask,updateTask,cancle}) =>{

    return(
        <>
        <div className='input-group '> <input type="text"  className='form-control inputTask mt-5' value={updateData && updateData.title} onChange = {(e) => changeTask(e)} />
        <button class="btn btn-warning text-white mt-5" type="submit" onClick={updateTask}>Update</button>
        <button class="btn btn-dark mt-5" type="button" onClick = {cancle}>Cancle</button></div>
        </>
    )
}
export default UpdateTaskForm