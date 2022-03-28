
let input = document.querySelector(".input"),word = document.querySelector(".word")
const btn = document.querySelector("button")



input.addEventListener("keyup", wordCounter)
btn.addEventListener("click",ClearText)
function wordCounter(e){
    let words = input.value.match(/\b[-?(\w+)?]+\b/gi)

    
    if(words){
        word.innerHTML = words.length
    }else{
        word.innerHTML = 0
    }
    preventDefault()
}

function ClearText(){

    input.value = ""
    wordCounter()
}