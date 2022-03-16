const input = document.querySelector("input"),btn = document.querySelector("button")
taskList = document.querySelector(".tasks-list")

const addTask = (e) =>{

    e.preventDefault()
    const newTask = document.createElement("li")
    const delTaskbtn = document.createElement("button")
    
    delTaskbtn.innerHTML = '<i class="fas fa-trash-alt"></i>'

    if(input.value !== ""){
        newTask.textContent = input.value;
        newTask.appendChild(delTaskbtn);
        taskList.appendChild(newTask)
        input.value = "";

    }else{
        alert("Please enter a task")

    }
    
    delTaskbtn.addEventListener("click", function(){
        const del = confirm("Are you sure you want to delete this task?")
        if(del == true){
            const parent = this.parentNode;
            parent.remove()
        }
    })

}
btn.addEventListener("click",addTask)