document.addEventListener("DOMContentLoaded", function(){
    const todo = document.getElementById("todo")
const submit = document.getElementById("submit")
const mainTaskList = document.getElementById("mainTaskList")

submit.addEventListener("click" , (event)=>{
    event.preventDefault()
    const todoValue= todo.value
    todo.value = ""

const taskSpace = document.createElement("div")
taskSpace.className= ("taskSpace")

const checklist = document.createElement("input")
checklist.type = ("checkbox")
checklist.className = ("checkbox")

const taskText = document.createElement("p")
taskText.className = ("taskinfo")
taskText.textContent = todoValue

const deletetask = document.createElement("button")
deletetask.className = ("deletebtn")
deletetask.textContent = "Delete"

taskSpace.appendChild(checklist)
taskSpace.appendChild(taskText)
taskSpace.appendChild(deletetask)
mainTaskList.appendChild(taskSpace)


})

mainTaskList.addEventListener("click" , (event)=>{
    if(event.target.className === "deletebtn"){
        event.target.parentNode.remove()
    }


})

mainTaskList.addEventListener("change" ,(event)=>{
    if(event.target.className==="checkbox"){
        const taskarea = event.target.parentNode

        if(event.target.checked){
            taskarea.style.color= "red"
        } else {
            taskarea.style.color= "black"
        }
    }


})



})