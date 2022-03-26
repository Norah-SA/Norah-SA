const input = document.querySelector("input"),btn = document.querySelector("button")
taskList = document.querySelector(".tasks-list"), div = document.querySelector(".list"),
counter = document.querySelector(".counter")

let UncompleteCount = 0, completeCount = 0
counter.textContent = "Complete: " + completeCount + " Uncomplete: " + UncompleteCount


const addTask = (e) =>{

    e.preventDefault()
    const newTask = document.createElement("li")
    const newlable = document.createElement("lable")
    const delTaskbtn = document.createElement("button")
    const checkbox = document.createElement("input")
    const countText = document.createElement("p")
    checkbox.type = "checkbox"
    checkbox.id = "checkbox"
    checkbox.name = "checkbox"
    checkbox.value = "checkbox"
    newlable.for = "checkbox"
    

    delTaskbtn.innerHTML = '<i class="fas fa-trash-alt"></i>'
    
    

    checkbox.addEventListener("change",function(){
        if(checkbox.checked){
            newlable.style.textDecoration = "line-through"
            newlable.style.textDecorationThickness = "2px" 
            UncompleteCount--
            completeCount++
            // 
        }else{
            newlable.style.textDecoration = "none"
            completeCount--
            UncompleteCount++
            
        }
        counter.textContent = "Complete: " + completeCount + " Uncomplete: " + UncompleteCount

    })

    if(input.value !== ""){

        newlable.textContent = input.value
        newTask.appendChild(checkbox)
        newTask.appendChild(newlable)
        newTask.appendChild(delTaskbtn)
        taskList.appendChild(newTask)
        div.appendChild(taskList)
        UncompleteCount++
        counter.textContent = "Complete: " + completeCount + " Uncomplete: " + UncompleteCount
        input.value = ""
        
    }else{
        alert("Please enter a task")

    }
    
    delTaskbtn.addEventListener("click", function(){
        const del = confirm("Are you sure you want to delete this task?")
        if(del == true){
            // UncompleteCount = UncompleteCount + completeCount
            
            const parent = this.parentNode;
            parent.remove()
            if(checkbox.checked){
                completeCount--
            }else{
                UncompleteCount--
            }
            counter.textContent = "Complete: " + completeCount + " Uncomplete: " + UncompleteCount
        }
        
    })
 



}




btn.addEventListener("click",addTask)









