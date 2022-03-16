const input = document.querySelector("input"), 
btn =  document.querySelector("button"),
tasksList = document.querySelector(".Tasks-list");

//Add a task function 
const addTask = (e) => {

    e.preventDefault();
    const newTask = document.createElement("li");
    const delTaskBtn = document.createElement("button");

    delTaskBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

    if(input.value !== ""){
        newTask.textContent = input.value;
        newTask.appendChild(delTaskBtn);
        tasksList.appendChild(newTask);
        input.value = "";
    }
    else{
        alert("Please enter a task")
    }

    //Delete function 
    delTaskBtn.addEventListener("click",function(){
        const del = confirm("Are you sure you want to delete this task?");
        if(del == true){
            const parent = this.parentNode;
            parent.remove();
        }
    });

    
};
btn.addEventListener("click",addTask);

//Delete function 

