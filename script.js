const input = document.getElementById("input")
const list = document.getElementById("list")

function addTask(){
    if (input.value === ''){
        alert("You must add something!")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = input.value
        list.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    input.value = ""
    saveData()
}

list.addEventListener("click", function(e){
    if (e.target.tagName == "LI"){
        e.target.classList.toggle("check")
        saveData()
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem("Data",list.innerHTML)
}
function showData(){
    list.innerHTML = localStorage.getItem("Data")
}
showData()